var express = require('express');
var mysql = require('mysql');

var app = express();
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'web_demo'
});

app.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    connection.query('SELECT * FROM todos', function(err, rows) {
      res.send(rows);
      connection.release();
    });
  });
})

app.listen(3000, function() {
  console.log("http://localhost:3000");
})
