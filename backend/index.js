import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import fs from "fs"; // Import modul fs

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'))

// Konfigurasi Multer untuk menyimpan file gambar
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Simpan file di dalam folder 'uploads'
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Endpoint untuk mengunggah gambar
app.post("/upload", upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }
    const imagePath = req.file.path; // Path file yang diunggah
    const imageName = req.file.filename; // Nama file yang diunggah
    return res.status(200).json({ success: true, message: "File uploaded successfully", imagePath: imagePath, imageName: imageName });
});

// Menyajikan file statis dari folder 'uploads'
app.use('/uploads', express.static('uploads'));

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "datapariwisata"
});

app.get('/', (req, res) => {
    const sql = 'select*from wisata';
    db.query(sql, (err, result) => {
        if (err) return res.json("error");
        return res.json(result)
    })
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Helper function to use async/await with MySQL queries
const query = (sql, args) => {
    return new Promise((resolve, reject) => {
        db.query(sql, args, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

app.get('/wisata/:id', async (req, res) => {
    const id = req.params.id;
    const queryStr = 'SELECT * FROM wisata WHERE id = ?';

    try {
        const results = await query(queryStr, [id]);
        if (results.length === 0) {
            return res.status(404).send('Data not found');
        }
        res.json(results[0]);
    } catch (error) {
        console.error('Error querying MySQL:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/", async (req, res) => {
    const q = "SELECT * FROM wisata";
    try {
        const data = await query(q);
        res.json(data);
    } catch (err) {
        console.error('Error querying MySQL:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post("/", async (req, res) => {
    const q = "INSERT INTO wisata(title, `desc`, cover, lokasi,category) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.lokasi,
        req.body.category
    ];

    try {
        const data = await query(q, [values]);
        res.json(data);
    } catch (err) {
        console.error('Error querying MySQL:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/comment/:id', async (req, res) => {
    const id = req.params.id;
    const queryStr = 'SELECT * FROM comment WHERE id = ?';

    try {
        const results = await query(queryStr, [id]);
        res.json(results);
    } catch (error) {
        console.error('Error querying MySQL:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/comment", async (req, res) => {
    const q = "SELECT * FROM comment";
    try {
        const data = await query(q);
        res.json(data);
    } catch (err) {
        console.error('Error querying MySQL:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post("/comment", async (req, res) => {
    const q = "INSERT INTO comment (id, comment, nama, rating) VALUES (?, ?, ?, ?)"; // Menambahkan kolom nama
    const values = [
        req.body.id, // Asumsikan bahwa id disediakan dalam body permintaan
        req.body.comment,
        req.body.nama,
        req.body.rating // Menambahkan data nama dari body permintaan
    ];

    try {
        const data = await query(q, values);
        res.json(data);
    } catch (err) {
        console.error('Error querying MySQL:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint penghapusan data dan file yang diunggah
app.delete("/delete", async (req, res) => {
    const ids = req.body.ids;
    if (!ids || ids.length === 0) {
        return res.status(400).json({ success: false, message: "No IDs provided" });
    }

    const deleteWisataQuery = 'DELETE FROM wisata WHERE id IN (?)';
    const deleteCommentQuery = 'DELETE FROM comment WHERE id IN (?)';
    const selectFilesQuery = 'SELECT cover FROM wisata WHERE id IN (?)';

    try {
        // Mulai transaksi
        await query('START TRANSACTION');

        // Ambil nama file yang akan dihapus
        const filesToDelete = await query(selectFilesQuery, [ids]);

        // Hapus data dari tabel comment
        const deleteCommentsResult = await query(deleteCommentQuery, [ids]);

        // Hapus data dari tabel wisata
        const deleteWisataResult = await query(deleteWisataQuery, [ids]);

        // Commit transaksi
        await query('COMMIT');

        // Hapus file yang terkait
        filesToDelete.forEach(file => {
            const filePath = path.join('uploads', file.cover);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error deleting file:', filePath, err);
                }
            });
        });

        // Mengembalikan jumlah data yang dihapus
        const deletedCount = deleteWisataResult.affectedRows;

        res.json({ success: true, message: "Data and related files deleted successfully", deletedCount });
    } catch (err) {
        // Rollback transaksi jika ada kesalahan
        await query('ROLLBACK');
        console.error('Error querying MySQL:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT rating FROM comment WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error fetching ratings:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(results);
    });
});

app.listen(8800, () => {
    console.log("Connected to backend on port 8800");
});
