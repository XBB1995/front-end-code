// 生成随机ID
// const randomId = len =>{
//     return Math.random().toString(36).substr(2, len)
// }
// let id = randomId(10)
// console.log(id)

//格式化钱
// let num = 12345678
// const toLocalNumber = num => {
//     return num.toString().replace(/\d(?=(\d{3})+$)/g, "$&,")
// }
// console.log(toLocalNumber(num))
// console.log(num.toLocaleString())

// 提取url参数
// const params = new URLSearchParams(location.search.replace(/\?/ig, ''))
// params.get("name")
// params.has("sex")

// const timestamp = +new Date()
// console.log(timestamp)

// 克隆数组
// let arr = [1,2,3, {name: 'boy'}]
// arr.name = 'XBB'
// Array.prototype.method = function(eve) {}
// // let arr1 = [...arr]
// // let arr1 = Object.assign([], arr)
// let arr1 = arr.slice()
// console.log(arr1)
// // for(let val of arr){
// //     console.log(val)
// // }
// for(let val in arr1){
//     console.log(arr1[val])
// }
// // Object.keys(arr).forEach(val=>console.log(arr[val]))

// 统计数组成员个数
// const arr = [1, 2, 'a', 'a', 'b', 'c']
// const count = (arr) => arr.reduce((t, c) => {
//     t[c] = t[c] ? ++t[c] : 1
//     return t
// }, {})

// console.log(count(arr))

// let arr = [1,2,3]
// // let arr1 = arr.map(val=> val+1)
// // let arr1 = arr.forEach(val=> val+1)
// console.log(arr)

// 过滤XSS
// function filterXSS(content){
//     let elem = document.createElement('div')
//     elem.innerText = content
//     const result = elem.innerHTML
//     elem = null
//     return result
// }

// console.log(filterXSS('<script>alert(123)</script>'))

// 解构赋值
// let [x, y = 'b'] = ['a']
// console.log(x, y)


// export default function A(){
//     console.log("a")
// }
// import A from './trick.js'

// 字符串扩展 字符串搜索 返回Boolean
// let s = 'hello vscode'
// let b1 = s.startsWith('hello')
// let b2 = s.includes('vs')

// console.log(a)
// var a = 1
// function a(x) {
//     x && a(--x)
// }
// console.log(a)

// function find(str){
//     var res = []
//     var index = 0
//     while(true){
//         index = str.indexOf(',', index+1)
//         if(index===-1) break
//         res.push(index)
//     }
//     return res[res.length>>1]
// }
// console.log(find('2(3,4(,5)),6(7,)'))

// function solution(input) {
//     var out = []
//     var res = input.split('')
//     var root = res.shift()
//     var len = res.length
//     if(len===0) out.push(root)
//     if(res[0]==="("&&res[len-1]===")"){
//         res = res.slice(1, len-1).join("")
//         var idx = find(res)
//         var left = res.slice(0, idx)
//         var right = res.slice(idx+1)
//         left = solution(left)
//         right = solution(right)
//         out = [...left, root, ...right]
//     }
//     return out
// }

// function solution(input) {
//     let stack = [],
//         res = [],
//         arr = Array.from(input)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '(' || arr[i] === ')') {
//             continue
//         } else if (arr[i] === ',') {
//             res.push(stack.pop())
//             if (arr[i] === ',' && arr[i - 1] !== '(') {
//                 res.push(stack.pop())
//             }
//         } else {
//             stack.push(arr[i])
//         }
//     }
//     return res
// }

// let res = solution("1(2(3,4(,5)),6(7,))")
// console.log(res)

// function solution(prices, budget) {
//     var count = -1
//     prices.sort((a,b)=>b-a)
//     for(let i=0;i<prices.length;i++){
//         if(prices[i]>budget) break
//         else {
//             var temp = Math.floor(budget / prices[i])
//             count += temp
//             budget -= temp * prices[i]
//         }
//     }
//     return count
// }

// var coinChange = function(coins, amount) {
//     let dp = Array.from({length:amount+1}).fill(amount)
//     dp[0] = 0
//     for(let i=1;i<=amount;i++){
//         for(let j=0;j<coins.length;j++){
//             if(i-coins[j]>=0){
//                 dp[i] = Math.min(dp[i], 1+dp[i-coins[j]])
//             }
//         }
//     }
//     return dp[amount]>amount?-1:dp[amount]
// }

// console.log(coinChange([1,2,5], 11))

// function deleteDuplication(pHead) {
//     // write code here
//     if (pHead === null || pHead.next === null) return pHead
//     if (pHead.next.val === pHead.val) {
//         var cur = pHead.next
//         while (!cur.val&&cur.val === pHead.val) {
//             cur = cur.next
//         }
//         return deleteDuplication(cur)
//     } else {
//         pHead.next = deleteDuplication(pHead.next)
//         return pHead
//     }
// }

// let arr1 = [2,3,1,4],
// arr2 = [1,2,3,4,5,6,7,8,9,10,11,1,1,2,3,4,5]
// function getDiff(arr1,arr2){
//     return [...arr1, ...arr2].filter((val, _, arr)=>{
//         return arr.indexOf(val) === arr.lastIndexOf(val)
//     })
// }
// const getArr = (arr1,arr2)=> [...new Set([...arr1, ...arr2])]
// console.log(getArr(arr1,arr2))