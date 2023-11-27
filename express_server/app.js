// express 받아오기
const express = require('express');
// 인스턴스 생성(app)
const app = express();

const getData = async() => {
    return await fetch('./db.json')
    .then(res => res.json());
}

let db = getData();

// 라우팅 처리예시 : 매개변수 첫번째 경로, 두번째 요청,응답
app.get('/', (req, res) => {
    res.send('Server Connect');
});

app.get('/posts', (req, res) => {
    res.send(db['posts']);
});

app.listen(3000, () => {
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');  // 실제 서버에 접근하는 경로
});