let words = ['spary', 'limit', 'elite',
              'exuberant', 'paresent'];
let result = words.filter(function(word, idx, arry){
    return word.length > 6;
});
console.log(words ,result);
let ysers = [
    {
        id : 100,
        name : 'Hong'
    },
    {
        id : 200,
        name : 'Kang'
    },
    {
        id : 300,
        name : 'Lee'
    }
]

result = users.map(function(user){
   return {
    id : user.id,
    name : user.name,
    grade : user.id == 200 ? 'VIP' : '일반'
   } 
});
console.log(user, result);