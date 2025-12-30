const fs = require('fs');
const input = fs.readFileSync('../inputs/flipflop/2025/puzzle03.txt',{ encoding: 'utf8', flag: 'r' });

let lines = input.split(/[\r\n]/)

// Part 1
let counts = lines.reduce((a,c)=> {return a[c] ? ++a[c] : a[c] = 1, a}, {})
console.log(Object.entries(counts).sort((a,b)=>b[1]-a[1])[0][0])

// Part 2
let labels = lines.map((x)=>x.split(',').map(Number)).map(([r,g,b])=>{
    if(r===g||r===b||g===b){
        return 'Special'
    } else {
        if(r>g && r>b){
            return 'Red'
        } else if (g>r && g>b) {
            return 'Green'
        } else {
            return 'Blue'
        }
    }
})

let labelCounts = labels.reduce((a,c)=> {return a[c] ? ++a[c] : a[c] = 1, a}, {})
console.log(labelCounts.Green)

// Part 3
console.log(Object.entries(labelCounts).reduce((a,c)=>{
    let [label,count] = c
    let prices = {
        Red: 5,
        Green: 2,
        Blue: 4,
        Special: 10
    }

    return a+=(prices[label]*count)
},0))