let array = [ 1, 2, 3 ];
let string = "Hello";
// [ 1, 2, 3, "H", "e", "1", "1", "o"] 이렇게 넣고싶다
// let newArray = [...array, ...string];
for(let value of array){
    newArray.push(value);
}
for(let value of string){
    newArray.push(string);
}
console.log(newArray);
