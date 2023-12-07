require('dotenv').config({path : './db/mysql.env'});  // 환경변수 env 파일을 받아오는 것
const express = require('express');
const app = express();  // 실제로 동작을 할 인스턴스 생성
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, () => {
    console.log('Server Start, http://localhost:3000');
});

// 전체조회
app.get('/employees', async(req, res) => {
    let list = await mysql.query('empList');
    res.send(list);
});

// 단건조회
app.get('/employees/:emp_no', async(req, res) => {
    let data = req.params.emp_no;
    let list = await mysql.query('empInfo', data);
    res.send(list[0]);
});

app.get('/dept', async (req, resp) => {
    let result = await mysql.query('deptList');
    resp.send(result);
 });

const empTable = ['emp_no', 'first_name', 'last_name', 'gender', 'hire_date'];
const deptEmpTable = ['emp_no', 'dept_no', 'from_date', 'to_date'];
const salariesTable = ['emp_no', 'salary', 'from_date', 'to_date'];

app.post('/employees', async(req, res) => {
    let data = req.body.param;    //  param 이면 데이터 보낼때 param 까묵지 말자!

    let empData = {};
    for(let col of empTable){   // let column = 'emp_no'
        let value = data[col];  // let value = empInfo['emp_no']
        if(value == '') continue;
        empData[col] = value;   // empData['emp_no']
    }
    let result1 = await mysql.query('empInsert', empData);

    let deptData = [];
    for(let col of deptEmpTable){
        let value = data[col];
        if(value == '') continue;
        deptData.push(value);
    }
    let result2 = await mysql.query('deptInsert', deptData);

    let salData = {};
    for(let col of salariesTable){
        let value = data[col];
        if(value == '') continue;
        salData[col] = value;
    }
    salData.to_date = '9999-01-01'
    let result3 = await mysql.query('salInsert', salData);
    res.send(result1);
});

// 수정
app.put('/employees/:emp_no', async(req, res) => {
    let datas = [req.body.param, req.params.emp_no]; 
    let result = await mysql.query('empUpdate', datas);
    res.send(result);
});

// 삭제
app.delete('/employees/:emp_no', async(req, res) => {
    let data = [req.body.param.to_date, req.params.emp_no];   
    let result = await mysql.query('empDelete', data);
    res.send(result);
});
