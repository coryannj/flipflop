const fs = require('fs');
const input = fs.readFileSync('../inputs/flipflop/2025/puzzle02.txt',{ encoding: 'utf8', flag: 'r' });

let rollercoaster = input.split('').map((x)=> x === '^' ? 1 : -1)

let
    p1currHeight = 0,
    p1maxHeight = 0,
    p2currHeight=0,
    p2maxHeight=0,
    upIndex = 1,
    downIndex = -1

rollercoaster.forEach((x)=> {
    p1currHeight+=x;
    if(p1currHeight>p1maxHeight) p1maxHeight=p1currHeight;

    if(x>0){
        p2currHeight+=upIndex
        upIndex++
        downIndex=-1
    } else {
        p2currHeight+=downIndex
        downIndex--
        upIndex=1
    }

    if(p2currHeight>p2maxHeight) p2maxHeight=p2currHeight

})

console.log(p1maxHeight)
console.log(p2maxHeight)

let p3Groups = rollercoaster.reduce((a,c) => {
    
    if(Math.sign(c)!==Math.sign(a.at(-1))){
        a.push(c)
    } else {
        Math.sign(a.at(-1)) === 1 ? a[a.length-1]++ : a[a.length-1]--
    }

    return a
},[rollercoaster.shift()])

let fib = new Map()
fib.set(0,0)
fib.set(1,1)
let maxFib = Math.max(...p3Groups.map((x)=>Math.abs(x)))

for(i=2;i<=maxFib;i++){
    fib.set(i,fib.get(i-2)+fib.get(i-1))
}

let p3currHeight = 0
let p3maxHeight = 0

p3Groups.map((x)=>fib.get(Math.abs(x))*Math.sign(x)).forEach((x)=>{
    p3currHeight+=x
    if(p3currHeight>p3maxHeight) p3maxHeight=p3currHeight;
})

console.log(p3maxHeight)