arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 98, 99, 9, 11, 8, 7, 6, 4, 3, 32]
// 1
// let newArr= arr.filter((item,index)=>{
//     return arr.indexOf(item)===index
// })
// 2
// for + for
// 3
// let a = []
// for (let val of arr) {
//     if (!a.includes(val)) {
//         a.push(val)
//     }
// }
// let newArr = a
// 4
// arr.sort((a, b) => a - b)
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1]) {
//         arr.splice(i, 1)
//         i--
//     }
// }
// console.log(arr);
// 5
// let s = new Set(arr)
// s = Array.from(s)
// 6
const obj = {}
let newArr = []
arr.forEach(item => {
    !obj[item] && ((obj[item] = 1) && newArr.push(item))
})


console.log(newArr);