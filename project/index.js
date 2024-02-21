const mysql = require("mysql2");
const express = require("express");
const app = express()
const port = 3000

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "DeliveryService",
    password: ""
  });

  app.get("/Canteen", function(req, res){
    pool.query("SELECT * FROM Canteen", function(err, data) {
      if(err) return console.log(err);
      res.json( {
        Canteen: data
      });
    });
});

app.get("/Client", function(req, res){
    pool.query("SELECT * FROM Client", function(err, data) {
      if(err) return console.log(err);
      res.json( {
        Client: data
      });
    });
});

app.get("/Couriers", function(req, res){
    pool.query("SELECT * FROM Couriers", function(err, data) {
      if(err) return console.log(err);
      res.json( {
        Couriers: data
      });
    });
});

app.get("/Dishes", function(req, res){
    pool.query("SELECT * FROM Dishes", function(err, data) {
      if(err) return console.log(err);
      res.json( {
        Dishes: data
      });
    });
});

app.get("/Orders", function(req, res){
    pool.query("SELECT * FROM Orders", function(err, data) {
      if(err) return console.log(err);
      res.json( {
        Orders: data
      });
    });
});

app.get("/PaymentMethod", function(req, res){
    pool.query("SELECT * FROM PaymentMethod", function(err, data) {
      if(err) return console.log(err);
      res.json( {
        PaymentMethod: data
      });
    });
});

app.delete("/Orders/:id", function(req, res){
    pool.query("DELETE FROM `Orders` WHERE `id`=" + req.params.id, function(err, data) {
      if(err) return console.log(err);
      res.json( {
        Orders: data
      });
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})