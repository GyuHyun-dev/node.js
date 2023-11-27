const url = require('url');
let legercy = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(legercy);

let whatwg = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(whatwg);
console.log(whatwg.searchParams.get('query'));