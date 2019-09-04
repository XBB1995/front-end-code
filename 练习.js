// function getZero(arr){
//     let left = 0,
//         right = arr.length-1,
//         res = []
//     arr.sort((a,b)=>a-b)
//     while (left<right){
//         var sum = arr[left]+arr[right]
//         if(sum===0){
//             res.push([arr[left],arr[right]])
//             // res.push(left+""+right)
//             left++
//             right--
//         }else if(sum<0){
//             left++
//         }else right--
//     }
//     return res.length
// }
//
// str = "-1, 2, 4, 5, -2"
// arr = [...str.split(", ")].map(val=>parseInt(val))
// console.log(arr);
// console.log(getZero(arr));
// // let arr = [-1,2,4,5,-2]
// // console.log(twoSum(arr,0));
//
// // function count(num){
// //     let res = 0
// //     while(num){
// //         num &= (num-1)
// //         res++
// //     }
// //     return res
// // }
// //
// // console.log(count(3));

// let str = "ab((<)c)d"
// function sign(str) {
//     str = str.replace(/\(.*\)/g, "")
//     let arr = Array.from(str),
//         res = []
//     arr.forEach(val=>{
//         if(val!=="<"){
//             res.push(val)
//         }else {
//             res.pop()
//         }
//     })
//     return res.join("")
// }
//
// console.log(sign(str));

n = 5
let mis = []
mis[0] = '.#...'
mis[1] = '..#S.'
mis[2] = '.E###'
mis[3] = '.....'
mis[4] = '.....'

for(let i=0;i<n;i++){
    mis[i] = mis[i].split("")
}

var bigmis = []
for(let i=0;i<2*n;i++){
    if(i<n){
        bigmis[i] = mis[i].concat(mis[i])
    }else {
        bigmis[i] = mis[i-n].concat(mis[i-n])
    }
}
let start = [],
    end = [],
    banner = []
console.log(bigmis);
for(let i=0;i<2*n;i++){
    for(let j=0;j<2*n;j++){
        if(bigmis[i][j]==="S"){
            start.push([i,j])
        }
        if(bigmis[i][j]==="E"){
            end.push([i,j])
        }
        if(bigmis[i][j]==="#"){
            banner.push([i,j])
        }
    }
}
console.log(start);
console.log(end);

for (let i=0;i<start.length;i++) {
    for (let j=0;j<end.length;j++) {
        sx = start[i][0]
        sy = start[i][1]
        ex = end[i][0]
        ey = end[i][1]
        stepx = ex>sx?1:-1
        stepy = ey>sy?1:-1
        while (sx!==ex&&sy!==ey){
            sx += stepx
            if(banner.indexOf([sx,sy])>-1){
                sx-=stepx
                break
            } else {
                continue
            }
            sy += stepy
            if(banner.indexOf([sx,sy])>-1){
                sy-=stepy
                break
            } else {
                continue
            }
        }
        while(sx!==ex){
            sx += stepx
            if(banner.indexOf([sx,sy])>-1){
                sx-=stepx
                break
            } else {
                continue
            }
        }

    }
}

// console.log(banner);