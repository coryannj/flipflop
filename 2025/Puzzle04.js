const fs = require('fs');
const input = fs.readFileSync('../inputs/flipflop/2025/puzzle04.txt',{ encoding: 'utf8', flag: 'r' });

let lines = input.split(/[\r\n]/).map((x)=>x.split(',').map(Number))
let lineLen = lines.length
let curr = [0,0]
let p1Steps = 0
let p2Steps = 0

let manhattan = ([x1,y1],[x2,y2]) => Math.abs(x1-x2)+Math.abs(y1-y2)

let p2Dist = ([x1,y1],[x2,y2]) => {
    let xDist = Math.abs(x1-x2)
    let yDist = Math.abs(y1-y2)
    if(xDist === yDist){
        return xDist
    } else {
        return xDist>yDist ? xDist : yDist
    }
}

for(i=0;i<lineLen;i++){
    p1Steps+=manhattan(curr,lines[i])
    p2Steps+=p2Dist(curr,lines[i])
    curr=lines[i]
}

console.log(p1Steps,p2Steps)

// Part 3
let p3Steps=lines.toSorted((a,b)=>manhattan([0,0],a)-manhattan([0,0],b)).reduce((a,c)=>[c,a[1]+p2Dist(a[0],c)],[[0,0],0])

console.log(p3Steps[1])