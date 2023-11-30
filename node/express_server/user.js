// express.Router 예시

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('회원 정보 조회');
});

// get 방식만 되어 브라우저상 접근 안됨
router.post('/insert', (req, res) => {
    res.send('회원 등록');
});

router.put('/update', (req, res) => {
    res.send('회원 정보 수정');
});

router.delete('/delete', (req, res) => {
    res.send('회원 정보 삭제');
});

module.exports = router; // 마지막에 꼭 적어둠. 