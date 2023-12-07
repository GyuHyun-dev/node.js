const mysql = require('mysql');
const sql = require('./db/sql.js');

const dbPool = mysql.createPool({
  host : process.env.MYSQL_HOST,
  port : process.env.MYSQL_PORT,
  user : process.env.MYSQL_USER,
  password : process.env.MYSQL_PWD,
  database : process.env.MYSQL_DB,
  connectionLimit : process.env.MYSQL_LIMIT
})

const query = async (table, dml, params)=>{
  return new Promise((resolve, reject)=>{
    console.log(table, dml, params);
    dbPool.query(sql[table][dml], params, (error, rows)=>{
      if(error){
        console.log(error);
        reject({
          error
        });
      }else{
        resolve(rows);
      }
    })
  })
}

module.exports = {
  query
}