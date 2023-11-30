require('dotenv').config({path : './db/mysql.env'}); // db접속
const express = require('express');
const app = express();
const mysql = require('./db.js');  // db에 query 받아오기 

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, () => {
    console.log('Server Start');
});

// 전체조회(list)
app.get('/customers', async(req, res) => {
    let list = await mysql.query('customerList');
    res.send(list);
});

// 단건조회
app.get('/customers/:id', async(req, res) => {
    let data = req.params.id;
    let list = await mysql.query('customerInfo', data);
    res.send(list[0]);
});

// 등록
app.post('/customers', async(req, res) => {
    let data = req.body.param;
    let result = await mysql.query('costomerInsert', data);
    res.send(result);
});

// // 수정
app.put('/customers/:id', async(req, res) => {
    let datas = [ req.body.param, req.params.id];  // 쿼리에 ?가 2개라서 배열로 보냄, id는 param에 있음
    let result = await mysql.query('costomerUpdate', datas);  
    res.send(result);
});

// // 삭제
app.delete('/customers/:id', async(req, res) => {
    let data = req.params.id;
    let result = await mysql.query('costomerDelete', data);
    res.send(result);
});

