let obj = {
    id : 100,
    name : 'Hong',
    birth : '1994-05-31'
}

let { id, name, age } = obj;
console.log(id,name, age);


// 인덱스 순서대로 가능 ex) Hello 다음 Monday 못꺼냄
let array = ['Hello', 'Nice', 'Monday'];

let [x, y] = array;
console.log(x,y)

// module.exprot = {
//     object : {},
//     method : function(){}
// }
// let {object, method} = module;