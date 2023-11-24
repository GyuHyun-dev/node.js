// 화살표 함수에서는 this 사용금지

// 함수선언식 var 처럼 전역변수 특징, 위쪽 배치함
function hello(name){
    return "Hello, " + name;
}

// 화살표 함수
let arrHello = (name) => {return "Hello, " + name;}
arrHello = name => "Hello, " + name; // 매개변수가 하나일때 ()생략 가능 


// 함수표현식 함수 선언되기 전에 선언해야함. 아래쪽 배치
const message = function(msg){
    return "msg, " + msg;
}

let arrMassage = (msg) => {return "msg, " + msg;}
arrMassage = msg => "msg, " + msg; // 매개변수가 하나일때 ()생략 가능
arrMassage = () => {
                      let tobody = new Date().getDay();
                      console.log("오늘 날짜 : " + tobody);
                   }