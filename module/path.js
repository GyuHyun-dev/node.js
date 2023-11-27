const path = require('path');

console.log('== 절대경로');
console.log(__filename);  // 파일경로
console.log(__dirname);  // 폴더경로
console.log(path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자 : ', path.extname(__filename));  // extname 확장자

let pathList = process.env.PATH.split(path.delimiter);
console.log(path.delimiter, pathList);
console.log('')
console.log(path.sep, pathList[0].split(path.sep));