import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "datapariwisata"
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
    const q = "INSERT INTO wisata(`title`, `desc`, `cover`, `lokasi`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.lokasi
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
    const q = "INSERT INTO `comment` (`id`, `comment`) VALUES (?, ?)";
    const values = [
        req.body.id, // Assumes that `id` is provided in the request body
        req.body.comment
    ];

    try {
        const data = await query(q, values);
        res.json(data);
    } catch (err) {
        console.error('Error querying MySQL:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(8800, () => {
    console.log("Connected to backend on port 8800");
});
