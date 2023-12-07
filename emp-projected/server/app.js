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
// 전체 조회
app.get('/depts', async(req, res)=>{
  let list = await mysql.query('dept','list');
  res.send(list);
});
// 전체 조회
app.get('/emps', async(req, res)=>{
  let list = await mysql.query('emp','list');
  res.send(list);
});

// 단건 조회
app.get('/emps/:no', async(req, res)=>{
  let empNo = req.params.no;
  let info = (await mysql.query('emp','info', empNo))[0];
  res.send(info);
});

const empTable = ['emp_no','first_name','last_name','gender','hire_date'];
const deptEmpTable = ['emp_no', 'dept_no', 'from_date', 'to_date'];
const salariesTable = ['emp_no', 'salary', 'from_date', 'to_date'];

app.post('/emps', async(req, res)=>{
  let empInfo = req.body.param;

  let empData = {};
  for(let column of empTable){  // let column = 'emp_no'
    let value = empInfo[column]; // let value = empInfo['emp_no']
    if(value == '') continue;
    empData[column] = value;      // empData['emp_no'] = value;
  }

  let result = await mysql.query('emp','insert', empData);

  let deptEmpData = [];
  for(let column of deptEmpTable){
    let value = empInfo[column];
    if(value == '') continue;
    deptEmpData.push(value);
  }

  result = await mysql.query('empDept','insert', deptEmpData);

  let salData = {};
  for(let column of salariesTable){
    let value = empInfo[column];
    if(value == '') continue;
    salData[column] = value;
  }
  salData.to_date = '9999-01-01';

  result = await mysql.query('sal','insert', salData);

  res.send(result);
  //res.end();
});

app.put('/emps/:no', async(req, res)=>{
  let data = [req.body.param, req.params.no];
  let result = await mysql.query('emp','update', data);
  res.send(result);
});

app.delete('/emps/:no', async(req, res)=>{
  let data = [req.body.param.to_date, req.params.no];
  let result = await mysql.query('empDept','update', data);
  res.send(result);
});

