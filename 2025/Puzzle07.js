const fs = require('fs');
const input = fs.readFileSync('../inputs/flipflop/2025/puzzle07.txt',{ encoding: 'utf8', flag: 'r' });

let lines = input.split(/[\r\n]/).map((x)=>x.split(' ').map(Number))

console.log(lines)

let p1paths= 0

lines.forEach(([r,c])=>{
    let col = Array(c).fill('.').map((x,i)=>0)
    let grid = Array(r).fill('.').map((x)=>col.slice())
    let start = [0,0]
    let queue = {}
    queue[`${r-1}-${c-1}`]=1
    let visited = new Set()

    while(queue['0-0']===undefined){
        let newQueue = {}
        Object.entries(queue).forEach(([k,v])=>{
            let [kr,kc] = k.split('-').map(Number)
            visited.add(k)
            
            let nextArr = [[kr-1,kc],[kr,kc-1]].filter(([nr,nc])=>nr>=0 && nc>=0)
            
            //console.log('k,v,nextarr',k,v,nextArr)
            
            nextArr.forEach(([nr,nc])=>{
                //if(!visited.has(`${nr}-${nc}`)){
                    newQueue[`${nr}-${nc}`] = (newQueue[`${nr}-${nc}`] ?? 0)+v
                //}
                
            })
            //console.log(newQueue)
        })
        queue = newQueue

    }

    console.log('[r,c]',r,c,'queue is ',queue)
    p1paths+=queue['0-0']

})
console.log(p1paths)