const fs = require('fs');
const input = fs.readFileSync('../inputs/flipflop/2025/puzzle05.txt',{ encoding: 'utf8', flag: 'r' });

let lines = input.split('')

let tunnels = {}

lines.forEach((x,i)=>{
    if(!tunnels[x]){
        tunnels[x] = [i]
    } else {
        tunnels[x].push(i)
    }
})

let currInd = 0
let p1steps = 0
let p3steps = 0
let endInd = lines.length
let visited = []

while(currInd !== endInd){
    let [n,[si,ei]] = Object.entries(tunnels).find(([t,v])=>v.includes(currInd))
    let sign = n===n.toUpperCase() ? -1 : 1
    visited.push(n)
    p1steps+=(ei-si)
    p3steps+=((ei-si)*sign)
    currInd===ei ? currInd=si+1 : currInd=ei+1
    //console.log([n,[si,ei]],p1steps,currInd)
}
console.log(p1steps)
console.log(Object.keys(tunnels).filter((x)=>!visited.includes(x)).join(''))
console.log(p3steps)