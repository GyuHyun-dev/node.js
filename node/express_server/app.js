const fs = require('fs');
// express 받아오기
const express = require('express');
const userRouter = require('./user.js');  // Router 받아옴
// 인스턴스 생성(app)
const app = express();


app.use('/user', userRouter);
app.use('/public', express.static('./images'));
// 에러메세지 처리
app.use(function(err, req, res, next){
    res.status(500).json({statusCode : res.statusCode, errMessage : err.message });
});
app.get('/error', (req, res, next) => {
    next(new Error('Process Fail !! Check Data!'));
});


const jsonFile = fs.readFileSync('../json-server/db.json');
const jsonData = JSON.parse(jsonFile);

// 아이디 값으로 db데이터 가져옴
const getData = (target, where) => {
    let data = jsonData[target];
    // profile 은 배열이 아니라 if문 한번 더 사용
if(Array.isArray(data)){
    let list = data;
    // for of는 배열만 가능해서 posts, comments 까지만
    for(let obj of list) {
        if(obj.id == where){
            data = obj;
        }
    }
}
    return data;
}

// 라우팅 처리예시 : 매개변수 첫번째 경로, 두번째 요청,응답
app.get('/', (req, res) => {
    res.send('Server Connect');
});

// posts 전체조회
app.get('/posts', (req, res) => {
    // posts의 데이터 받기
    let data = getData('posts');
    res.send(data);
});
 
// posts 단건조회 id값
app.get('/posts/:id', (req, res) => {
    // params(body) 안에 id 값 받아옴
    let data = getData('posts', req.params.id);
    res.send(data);
});

// comments 전체조회 
app.get('/comments', (req, res) => {
    // comments의 데이터 받기
    let data = getData('comments');
    res.send(data);
});

// comments 단건조회 id값
app.get('/comments/:id', (req, res) => {
    // comments의 데이터 받기
    let data = getData('comments', req.params.id);
    res.send(data);
});

// profile 
app.get('/profile', (req, res) => {
    // profile의 데이터 받기
    let data = getData('profile');
    res.send(data);
});

app.get('/profile/:id', (req, res) => {
    // profile의 데이터 받기
    let data = getData('profile', req.params.id);
    res.send(data);
});

// reute 경로에 있는 클라이언트 요청을
// 한번에 세분화(get, post, put, delete) 시켜서 처리함.
// default get 방식, 브라우저에 emps 로 들어가면 사원 전체조회만 나옴
app.route('/emps')
.get((req, res) => {
    res.send('사원 전체조회');
})
.post((req, res) => {
    res.send('사원 등록');
})
.put((req, res) => {
    res.send('사원 수정');
})
.delete((req, res) => {
    res.send('사원 삭제');
});


app.listen(3000, () => {
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');  // 실제 서버에 접근하는 경로
});