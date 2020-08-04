 
const mysql = require('mysql');
const express =require('express');
const app = express();

const port = process.env.PORT || 3307;

const server = app.listen(port, function() {
	console.log('API listening on port ' + port);
});

const connection = mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'password',
	database:'company'
});

app.get('/getall',(req,res)=>{
	const sql = 'select * from users;'
	connection.query(sql,(error,result)=>{
		res.json({data:result})
      })
}),

app.get('/byid/:id',(req,res)=>{
	const {id} = req.params;
	const sql = 'select * from users where id = ?';
	connection.query(sql,[id],(error,result)=>{
		res.json({data:result})
	})
})


connection.connect()
console.log('database connected' + ' ' +connection.config.database)

/*connection.end()
console.log('database connected11')

server.close()*/
module.exports = server
