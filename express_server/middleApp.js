// 미들웨어 모듈중 body-parser
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

// application/www-from-urlenCoded 우리가 사용하는 기본 컨텐트 타입
const defaultParser = express.urlencoded({extended : false});
// application/json   json 타입
const jsonParser = express.json();

app.use(defaultParser);

app.post('/info', (req, res) => {
    res.send('welcome, ' + req.body.name);
});



// 라우터별로 등록하는 법
app.post('/message', jsonParser, (req, res) => {
    res.send('MSG:, ' + req.body.message);
});

app.listen(5000, () => {
    console.log('server start!');
});


// 미들웨어 모듈 express-session
let sessionSetting = session({
    secret : 'secret key',
    resave : false,
    saveUninitialized : true,
    cookie : {
        httpOnly : true,
        secure : false,
        maxAge : 60000
    }
});



app.use(sessionSetting);

const corsOptions = {
    origin : 'http://192.168.56.1:5500',
    OptionSuccessStatus : 200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send(req.session);
});

app.post('/login', (req, res) => {
    const { id, pwd } = req.body;
    req.session.user = id;
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/');
    })
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    req.redirect('/');
})

