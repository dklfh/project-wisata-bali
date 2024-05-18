import express, { query } from "express"
import mysql from "mysql";
import cors from "cors";

const app = express()
app.use(cors());
app.use(express.json());


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"datapariwisata"
});

app.get('/wisata/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM wisata WHERE id = ?';

  db.query(query, [id], (error, results, fields) => {
      if (error) {
          console.error('Error querying MySQL:', error);
          res.status(500).send('Internal Server Error');
          return;
      }
      if (results.length === 0) {
          res.status(404).send('Data not found');
          return;
      }
      res.json(results[0]);
  });
});


  app.get("/", (req, res) => {
    const q = "SELECT*FROM wisata";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

  app.post("/", (req, res) => {
    const q = "INSERT INTO wisata(`title`, `desc`, `cover`,`lokasi`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.cover,
      req.body.lokasi,

    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

app.listen(8800, ()=>{
    console.log("connect to bacckend")
})

