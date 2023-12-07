require('dotenv').config({ path : './db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, ()=>{
    console.log('Server Start, http://localhost:3000');
});

app.get('/boardList', async(req, res)=>{
    let list = await mysql.query('boardList');
    res.send(list);
  });

  app.get('/boardInfo/:no', async(req, res) => {
    let data = req.params.no;
    let list = await mysql.query('boardInfo', data);
    res.send(list[0]);
});

app.put('/boardUpdate/:no', async(req, res) => {
    let datas = [ req.body.param, req.params.no ];
    let result = await mysql.query('boardUpdate', datas);
    res.send(result);
});