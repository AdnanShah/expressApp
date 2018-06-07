var express = require('express');
var router = express.Router();

var mysql = require("mysql");

var select_all_books = "select * from books";

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "used_books"
});

// const select_all_books="select * from "
router.get("/", (req, res, next) => {
  connection.query(select_all_books, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: result
      });
    }
  });
});

router.get("/add", (req, res) => {
  // const { name, price } = req.query;
  insert_books = `insert into books (name,price) values('${req.query.name}',${req.query.price})`;
  connection.query(insert_books, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("books added");
    }
  });
});
module.exports = router;
