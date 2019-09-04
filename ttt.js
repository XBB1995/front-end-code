// function Permutation(string) {
//     var result = [];
//     if (string.length == 1) {
//         return [string]
//     } else {
//         var preResult = Permutation(string.slice(1));
//         for (var j = 0; j < preResult.length; j++) {
//             for (var k = 0; k < preResult[j].length + 1; k++) {
//                 var temp = preResult[j].slice(0, k) + string[0] + preResult[j].slice(k)
//                 result.push(temp);
//             }
//         }
//         return Array.from(new Set(result));
//     }
// }
//
// function permutation(str) {
//     let res = []
//     if(str.length===0) return false
//     if (str.length === 1) {
//         return [str]
//     } else {
//         let preResult = permutation(str.slice(1))
//         for (let i = 0; i < preResult.length; i++) {
//             for (let k = 0; k < preResult[i]+1; k++) {
//                 let temp = preResult[i].slice(0,k) +str[0]+preResult[i].slice(k)
//                 res.push(temp)
//             }
//         }
//     }
//     return Array.from(new Set(res))
// }

// let handle = function (task) {
//     return new Promise(resolve => {
//         console.log(task + "-->")
//         resolve(task)
//     })
// }
//
// function serial(arr, val) {
//     let index = 0
//     return new Promise((resolve, reject) => {
//         dispatch(val)
//
//         function dispatch(val) {
//             if (index === arr.length) return resolve(val)
//             const fn = arr[index++]
//             fn(val).then(val => {
//                 dispatch(val)
//             })
//         }
//     })
// }
//
// // let temp = 0
// // async function doIt() {
// //     for (let i=0;i<arr.length;i++) {
// //         temp = temp + arr[i]
// //         temp = await handle(temp)
// //     }
// // }
// // doIt()
//
// // // Should equal 15
// // console.log(sum(1, 2, 3, 4, 5));
// // // Should equal 0
// // console.log(sum(5, null, -5));
// // // Should equal 10
// // console.log(sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1,
// //     'E', 1, 'F', 1, 'G', 1));
// // // Should equal 0.3, not 0.30000000000000004
// // console.log(sum(0.1, 0.2));
// //
// // function sum() {
// //     console.log([...arguments]);
// //     let arr = [].slice.apply(arguments)
// //     return arr.reduce(function (prev, next) {
// //         if (!next || isNaN(next) || next===true) return prev
// //         let b1 = prev.toString().split(".")[1] ? prev.toString().split(".")[1].length : 0
// //         let b2 = next.toString().split(".")[1] ? next.toString().split(".")[1].length : 0
// //         let base = Math.pow(10, Math.max(b1, b2))
// //         return (prev * base + next * base) / base
// //     }, 0)
// // }
//
// // 马拉车方法
// // let s = "12023"
// // let arr = [],
// //     max = ''
// // Array.from(s).forEach(item => {
// //     arr.push(item + "#")
// // })
// // arr = "#" + arr.join("")
// // for (let i = 1; i < arr.length; i++) {
// //     let res = core(arr, i - 1, i + 1)
// //     max = max.length > res.length ? max : res
// // }
// //
// // function core(arr, l, r) {
// //     while (arr[l]&&arr[r]&&arr[l] === arr[r]) {
// //         str = arr.slice(l,r+1)
// //         l--
// //         r++
// //     }
// //     return str
// // }
// //
// // console.log(max.split("#").join(""));
//
// // add(1)(2)(3)
// // function add() {
// //     let sum = 0,
// //         arr = [].slice.call(arguments)
// //     sum = arr.reduce((pre, next) => pre + next, sum)
// //     let fn = function () {
// //         let arr1 = [].slice.call(arguments)
// //         sum += arr1.reduce((prev, next) => prev + next, 0)
// //         return fn
// //     }
// //     fn.toString = () => sum
// //     return fn
// // }
// //
// // console.log(add(1,2)(3).toString());
//
// // let obj = {
// //     "a": 0,
// //     "c": 123,
// //     length: 1
// // }
// // let arr = [].slice.call(obj)
// // console.log(arr);
//
// // function prime(n) {
// //     let arr = []
// //     for (let i = 2; i < n; i++) {
// //         for (var j = 2; j < Math.sqrt(i); j++) {
// //             if (i % j === 0) break
// //         }
// //         if (j >= Math.sqrt(i)) {
// //             arr.push(i)
// //         }
// //     }
// //     return arr
// // }
// //
// // console.log(prime(100));
//
// // function getUrlParams(sUrl, sKey) {
// //     var param = {};
// //     sUrl.replace(/[\d&]?(\w+)=(\w+)[&#]/g, function ($0, $1, $2) {
// //         param[$1] = param[$1] === undefined ? $2 : [].concat(param[$1], $2);
// //     });
// //     return sKey === (undefined || '') ? param || {} : param[sKey] || '';
// // }
// //
// // console.log(getUrlParams.length);
// //
// // console.log(getUrlParams('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', ''));
// // var nickname = "Kitty";
// // function Person(name){
// //     this.nickname = name;
// //     this.distractedGreeting = () =>{
// //
// //         setTimeout(function(){
// //             console.log("Hello, my name is " + this.nickname);
// //         }, 500);
// //     }
// // }
// //
// // var person = new Person('jawil');
// // person.distractedGreeting();
//
// // var number = 3500;
// //
// // console.log(number.toLocaleString()); // Displays "3,500" if in U.S. English locale
//
// // var user = {
// //     count : 1,
// //     getCount: function(){
// //         return this.count;
// //     }
// // }
// // var func = user.getCount
// // console.log(func())
//
// // let time = new Date()
// // console.log(formatDate(time));
// //
// // function formatDate(val) {
// //     let value = new Date(val)
// //     let year = value.getFullYear()
// //     var month=padDate(value.getMonth()+1);
// //     var day=padDate(value.getDate());
// //     var hour=padDate(value.getHours());
// //     var minutes=padDate(value.getMinutes());
// //     var seconds=padDate(value.getSeconds());
// //     return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
// // }
// // function padDate(val) {
// //     return val>9?val:"0"+val
// // }
//
// // let name = "xxxxxxxbbbbbbbAyo"
// // console.log(name.toUpperCase());
// // console.log(name);
//
// // let name = '"a", "b"';
// // name.replace(/"([^"]*)"/g, "'$&'");
// // console.log(name);
//
// // let m = [1, 2, 3, 4]
// //
// // console.log([].slice.apply(m));
//
// // function IsPopOrder(pushV, popV)
// // {
// //     // write code here
// //     if(pushV.length == 0 || popV.length == 0) return false
// //     let stack = [],
// //         len = 0
// //     for(var i=0,j=0;i<pushV.length;){
// //         stack.push(pushV[i++])
// //         while(stack.length!==0&&stack[stack.length-1]===popV[j]){
// //             stack.pop()
// //             j++
// //         }
// //     }
// //     return stack.length===0?true:false
// //
// // }
// // let pushV = [1,2,3,4,5],
// //     popV = [4,5,3,2,1]
// // console.log(IsPopOrder(pushV, popV));
//
// // function FirstNotRepeatingChar(str)
// // {
// //     // write code here
// //     let obj = {}
// //     Array.from(str).forEach(key=>{
// //         if(!obj[key]) obj[key] = 1
// //         else obj[key] = obj[key]+1
// //     })
// //     for(let index in obj) {
// //         if(obj[index]===1){
// //             return str.indexOf(index)
// //         }
// //     }
// //     return -1
// // }
// //
// // console.log(FirstNotRepeatingChar("google"));
//
// // function getNum(...args) {
// //     let res = [...args]
// //     let target = res.pop()
// //     let obj = {},
// //         sum = []
// //     for (let i = 0; i < res.length; i++) {
// //         if (res[i] > target) continue
// //         var temp = target - res[i]
// //         if (!obj[res[i]]) obj[res[i]] = [i]
// //         else obj[res[i]].push(i)
// //         if (obj[temp]) {
// //             if(obj[temp]!==[i]){
// //                 sum = sum.concat(obj[temp], i)
// //             }
// //         }
// //     }
// //     console.log(obj);
// //     return sum
// // }
// //
// // console.log(getNum(1,1,1,2));
//
// // str = "ABCDEFGHIJK"
// // res = [58, 42 ,98 ,84 ,84, 40, 75, 97, 98, 7,8, 40, 54 ]
// // let all = "ABCDEFGHIJKLM"
// // str = Array.from(str)
// // let temp = []
// // str.forEach(item=>{
// //     temp.push(all.indexOf(item))
// // })
// // let max = 0
// // console.log(temp);
// // temp.forEach(item=>{
// //     res[item] = 0
// // })
// // console.log(res);
// // for(let i=0;i<13;i++){
// //     max = res[max]>=res[i]?max:i
// // }
// // console.log(all.charAt(max));
//
// // 01背包
// // size 背包大小
// // function packageMaxValue(weight, value, size) {
// //     let bagMatrix = []
// //     for(let w=0;w<=size;w++) {
// //         bagMatrix[w] = []
// //         for (let j=0;j<weight.length;j++){
// //             if(w === 0) {
// //                 bagMatrix[w][j] = 0
// //                 continue
// //             }
// //             if(w < weight[j]){
// //                 bagMatrix[w][j] = bagMatrix[w][j-1] || 0
// //                 continue
// //             }
// //             bagMatrix[w][j] = Math.max(bagMatrix[w][j-1] || 0, bagMatrix[w-weight[j]][j-1] || 0 + value[j])
// //         }
// //     }
// //     return bagMatrix
// // }
// //
// // let weight = [4, 5, 6, 2, 2]
// // let value = [6, 4, 5, 3, 6]
// //
// // console.log(packageMaxValue(weight, value, 10))
//
// // (function fx(x) {
// //     return (function fy(y) {
// //         alert((function fx(z) {
// //             return y
// //         })(3))
// //     })(2)
// // })(1)
//
// // function Print(pRoot) {
// //     // write code here
// //     if (!pRoot) return []
// //     let res = [],
// //         q = [pRoot],
// //         len = 0
// //     let temp = []
// //     while (q.length > 0) {
// //         len = q.length
// //         temp = []
// //         while (len > 0) {
// //             pRoot = q.shift()
// //             temp.push(pRoot.val)
// //             if (pRoot.left) q.push(pRoot.left)
// //             if (pRoot.right) q.push(pRoot.right)
// //             len--
// //         }
// //         res.push(temp)
// //     }
// //     return res
// // }
//
// // let left = {
// //     val: 5,
// //     left: null,
// //     right: null
// // }
// // let right = {
// //     val: 15,
// //     left: null,
// //     right: null
// // }
// // let node = {
// //     val: 10,
// //     left: left,
// //     right: right
// // }
// //
// // function KthNode(pRoot, k)
// // {
// //     // write code here
// //     if(!pRoot) return false
// //     let result = []
// //     inOrder(pRoot,result)
// //     return result[k-1]
// // }
// //
// // function inOrder(pRoot, res){
// //     if(pRoot === null) return
// //     if(pRoot.left) inOrder(pRoot.left, res)
// //     res.push(pRoot.val)
// //     if(pRoot.right) inOrder(pRoot.right, res)
// // }
// //
// // console.log(KthNode(node, 1));
//
// // function duplicate(numbers, duplication)
// // {
// //     // write code here
// //     //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
// //     //函数返回True/False
// //     let q = Array.from({length:numbers}).fill(0)
// //     for(let i=0;i<numbers;i++){
// //         if(q[duplication[i]]===0) q[duplication[i]] = 1
// //         if(q[duplication[i]]){
// //             duplication[0] = duplication[i]
// //             console.log(q);
// //             return true
// //         }
// //     }
// //
// //     return false
// // }
// //
// // console.log(duplicate(5, [2, 1,3,1,4]));
//
// // function NumberOf1Between1AndN_Solution(n)
// // {
// //     // write code here
// //     let str = ''
// //     for(let i=1;i<=n;i++){
// //         str += i
// //     }
// //     let count = 0
// //     Array.from(str).forEach(key=>{
// //         if(parseInt(key)===1) count++
// //     })
// //     return count
// // }
//
// // function GetUglyNumber_Solution(index)
// // {
// //     // write code here
// //     let i2 = 0,
// //         i3 = 0,
// //         i5 = 0,
// //         res = [1]
// //     for(let i= 1;i<index;i++){
// //         var min = Math.min(res[i2]*2,Math.min(res[i3]*3,res[i5]*5))
// //         res.push(min)
// //         if(min === res[i2]*2) i2++
// //         if(min === res[i3]*3) i3++
// //         if(min === res[i5]*5) i5++
// //     }
// //     return res[index-1]
// // }
// //
// // console.log(GetUglyNumber_Solution(6));

// function LeftRotateString(str, n)
// {
//     // write code here
//     let len = str.length
//     n = n%len
//     if(n===0) return str
//     return str.slice(n)+str.slice(0,n)
// }
//
// console.log(LeftRotateString("abcXYZdef", 9));

// let str = "ababa"
// let arr = Array.from(str)
// let obj = {}
// arr.forEach(val=>{
//     if(!obj[val]) obj[val] = 1
//     else obj[val] = obj[val] + 1
// })
// let max = 0,
//     c = '',
//     flag = false
// for (let i in obj){
//     if(obj[i]>1){
//         if(max<obj[i]){
//             max = obj[i]
//             c = i
//         }
//     }
// }
//
// console.log(max, c);

// let n = 10
// res = [5, 2, 6]
// let m = 3
//
// let pre,
//     target = []
// for (let s = 1; s <= n; s++) {
//     pre = [s]
//     for (let i = 0; i < m; i++) {
//         pre = go(pre, res[i], i, target)
//     }
// }
// target = [...new Set(target)].length
// // console.log(target);
//
// function go(pos, d, index, target) {
//     let out = []
//     pos.forEach(p=>{
//         if (p + d <= n) {
//             if (index === m - 1) {
//                 target.push(p+d)
//             } else {
//                 out.push(p + d)
//             }
//         }
//         if (p - d >= 1) {
//             if (index === m - 1) {
//                 target.push(p-d)
//             } else {
//                 out.push(p - d)
//             }
//         }
//     })
//     return out
// }

// var i = 0
// let arr = Array(10)
// let arr1 = Array.from({length: 10})
// // console.log(arr1);
// // arr1.forEach((item)=>{
// //     i++
// // })
// // for (let val of arr){
// //     console.log(typeof val);
// //     i++
// // }
// // console.log(i);
// // for (let val in arr){
// //     i++
// // }
// // console.log(i);

// const color = ['red', 'yellow']
// const colorful = [...color, "green", "blue"]
// console.log(colorful);
// let obj
// const alpha = {...obj, third: "c"}
// console.log(alpha);

// let left1 = {
//     val: 1,
//     left: null,
//     right: null
// }
// let left2 = {
//     val: 3,
//     left: null,
//     right: null
// }
// let left = {
//     val: 2,
//     left: left1,
//     right: left2
// }
//
//
// let right = {
//     val: 7,
//     left: null,
//     right: null
// }
// let node = {
//     val: 4,
//     left: left,
//     right: right
// }
// console.log(reverse(node));
//
// function reverse(root) {
//     if(!root) return
//     if (root.left) reverse(root.left)
//     if (root.right) reverse(root.right)
//     let temp = root.left
//     root.left = root.right
//     root.right = temp
//     return root
// }

// function * gen(i) {
//     yield i
//     yield i*2
// }
// let g = gen(10)
// console.log(g.next().value);
// console.log(g.next().value);

// function ageV(age){
//     let now = new Date()
//     let year = now.getFullYear()
//     let month = now.getMonth()+1
//     let day = now.getDate()
//     let res = age.split("-")
//     console.log(year, month, day);
//     console.log(res);
//     if(year-res[0]>18){
//         return true
//     }else if(year-res[0]===18){
//         if(month-res[1]>0){
//             return true
//         }else if(month-res[1]===0){
//             if(day>=res[2]){
//                 return true
//             }
//         }
//     }
//     return false
// }
//
// console.log(ageV("2001-7-1"));

// String.prototype.trimNumber = function (){
//     return this.replace(/[^(A-z)]/g,"")
//     // let arr = [1,2,3,4,5,6,7,8,9,0]
//     // let res = Array.from(this)
//     // return res.filter(val=>{
//     //     if (arr.indexOf(parseInt(val))===-1){
//     //         return true
//     //     }
//     // }).join("")
// }
// let str = "     hd2e  4l1l ABCD ***2o 3"
// let tn = String.prototype.trimNumber.bind(str)
// console.log(tn());

// function FindPath(root, expectNumber) {
//     // write code here
//     if (root === null) return []
//     let res = [],
//         cur = []
//
//     function helper(root, target) {
//         if (root === null) return
//         var value = root.val
//         cur.push(root.val)
//         if (root.val === target && root.left === null && root.right === null) {
//             res.push(cur.slice())
//         } else if (value < target) {
//             var newTarget = target - root.val
//             if (root.left) helper(root.left, newTarget)
//             if (root.right) helper(root.right, newTarget)
//         }
//         cur.pop()
//     }
//
//     helper(root, expectNumber)
//     return res
// }

// let cur = []
// cur.push("1")
// cur.push(1)
// cur.push(1)
// console.log(cur.slice());
// let res = []
// res.push(cur.slice())
// res.push(cur.slice())
// console.log(res);

// let cur = ["1","2","3"]
// console.log(cur.slice());

// function FindFirstCommonNode(pHead1, pHead2)
// {
//     // write code here
//     if(!pHead1&&!pHead2) return
//     let stack1 = [],
//         stack2 = []
//     while(pHead1){
//         stack1.push(pHead1)
//         pHead1 = pHead1.next
//     }
//     while(pHead2){
//         stack1.push(pHead2)
//         pHead2 = pHead2.next
//     }
//     var top
//     while(stack1.length&&stack2.length){
//         var p1 = stack1.pop(),
//             p2 = stack2.pop()
//         if(p1===p2){
//             top = p1
//         }else break
//     }
//     return top
// }

// function IsContinuous(numbers) {
//     // write code here
//     let arr = Array.from({length: 14}).fill(0)
//     let max = -1,
//         min = 14
//     for(let i=0;i<numbers.length;i++){
//         arr[numbers[i]]++
//         if (arr[0] > 4) return false
//         if (numbers[i]&&arr[numbers[i]] > 1) {
//             return false
//         }
//         console.log(numbers[i]);
//         if(numbers[i]>0){
//             max = max > numbers[i] ? max : numbers[i]
//             min = min < numbers[i] ? min : numbers[i]
//         }
//     }
//     if (max - min > 4) return false
//     else return true
// }
//
// console.log(IsContinuous([1, 0,0,1,0]));

// console.log(JSON.parse('{"a":2}'));
// console.log(JSON.stringify({a: 2}));

// setTimeout(()=>{
//     console.log(1);
// },0)
// new Promise(function excutor(resolve) {
//     console.log(2);
//     for (var i=0;i<100000;i++){
//         if(i===99999){
//             resolve()
//         }
//     }
//     console.log(3);
// }).then(res=>{
//     console.log(4);
// })
//
// console.log(5);