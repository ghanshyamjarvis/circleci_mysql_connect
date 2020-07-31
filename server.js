 
const mysql = require('mysql');
const express =require('express');
const app = express();

const port = process.env.PORT || 3306;

const server = app.listen(port, function() {
  console.log('API listening on port ' + port);
});

const connection = mysql.createConnection({
  host:'localhost',
  user:'user',
  password:'password',
  database:'company'
});


connection.connect()
console.log('database connected' + ' ' +connection.config.database)

connection.end()
console.log('database connected11')

server.close()
