const mysql = require("mysql2");
const express = require("express");
const app = express()
const port = 3000

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "Siuepe",
    password: ""
  });

  app.get("/student", function(req, res){
    pool.query("SELECT * FROM student", function(err, data) {
      if(err) return console.log(err);
      res.json( {
          student: data
      });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})