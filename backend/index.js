import express from "express"
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
    const q = "INSERT INTO wisata(`title`, `desc`, `cover`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.cover,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

app.listen(8800, ()=>{
    console.log("connect to bacckend")
})

