const fs = require('fs');
const input = fs.readFileSync('../inputs/flipflop/2025/puzzle07.txt',{ encoding: 'utf8', flag: 'r' });

let lines = input.split(/[\r\n]/).map((x)=>x.split(' ').map(Number))

const allPaths = (grids) => {
    let paths = 0

    grids.forEach((g)=>{
        let queue = {}
        let start = g.map((x)=>x-1)
        let startKey = start.join('-')
        let endKey = start.map((x)=>0).join('-')
        let dimensions = g.length
        let step = Array(dimensions).fill(0).map((x)=>x)
        let nextSteps = Array(dimensions).fill(step).map((x,i)=>x.with(i,-1))

        queue[startKey]=1
        
        while(queue[endKey]===undefined){
            let newQueue = {}

            Object.entries(queue).forEach(([k,v])=>{
                let point = k.split('-').map(Number)
                let nextArr = nextSteps.map((x)=> x.map((y,yi)=>point[yi]+y)).filter((x)=>x.every((y)=>y>=0))
                
                nextArr.forEach((nx)=>{
                    newQueue[nx.join('-')] = (newQueue[nx.join('-')] ?? 0)+v                
                })
            })

            queue = newQueue
        }

        paths+=queue[endKey]
    })
    
    return paths

}

console.log(allPaths(lines)) //Part 1
console.log(allPaths(lines.map(([x,y])=>[x,y,x]))) //Part 2
console.log(allPaths(lines.map(([x,y])=>Array(x).fill(y).map((z)=>z)))) //Part 3