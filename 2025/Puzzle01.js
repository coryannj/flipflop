const fs = require('fs');
const input = fs.readFileSync('../inputs/flipflop/2025/puzzle01.txt',{ encoding: 'utf8', flag: 'r' });

let bananaRegex = /(ba|na|ne)/g
let banenaRegex = /ne/

let lines = input.split(/[\r\n]/)
console.log(lines.map((x)=>x.matchAll(bananaRegex).toArray().length).reduce((a,c)=>a+c))

console.log(lines.map((x)=>x.matchAll(bananaRegex).toArray().length).filter((x)=>x%2===0).reduce((a,c)=>a+c))

console.log(lines.filter((x)=>!banenaRegex.test(x)).map((x)=>x.matchAll(bananaRegex).toArray().length).reduce((a,c)=>a+c))

