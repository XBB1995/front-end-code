// call apply bind
// function Fun() {
// }
//
// let fun = new Fun()
// Fun.prototype.say = (name, age, msg) => console.log(`${age} say ${msg} to ${name}`);
// // fun.say("XBB", 25)
// // Fun.prototype.say.call(fun, "XBB", 25)
// // Fun.prototype.say.apply(fun, ["XBB", 25])
// Fun.prototype.say = Fun.prototype.say.bind(fun, ...["XBB", 25])
// fun.say("hello")

// let p = Promise.reject("hi")
// p.then(res=>{
//     console.log(res);
// }).catch(e=>{
//     throw new Error(e)
// })
// console.log(p.status);

// 观察者模式
// function Subject() {
//     this.observers = []
// }
//
// Subject.prototype = {
//     add: function (observer) {
//         if (this.observers.indexOf(observer) == -1){
//             this.observers.push(observer)
//         }
//     },
//     remove: function (observer) {
//         let observers = this.observers
//         for (let i = 0; i < observers.length; i++) {
//             if (observers[i] === observer) {
//                 observers.splice(i, 1)
//             }
//         }
//     },
//     notify: function () {
//         let observers = this.observers
//         for (let i = 0; i < observers.length; i++) {
//             observers[i].update()
//         }
//     }
// }
//
// function Observer(name) {
//     this.name = name
// }
//
// Observer.prototype = {
//     update: function () {
//         console.log(`my name is ${this.name}`);
//     }
// }
// // 创建观察者
// let sub = new Subject()
// // 创建依赖对象
// let ob1 = new Observer("XBB")
// let ob2 = new Observer(123)
// // 添加依赖
// sub.add(ob1)
// sub.add(ob2)
// // sub.add(ob2)
// // 删除依赖
// // sub.remove(ob2)
// // 通知
// sub.notify()


// Promise
// function timeout1(ts) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(resolve, ts)
//     }))
// }
//
// function timeout2(ts) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(resolve, ts)
//     }))
// }
//
// Promise.all([timeout1(1000), timeout2(2500)]).then(res => {
//     console.log(res);
// })

// 闭包
// function outer() {
//     var i = 0
//     function inner() {
//         i = i + 1
//         console.log(i)
//     }
//     return inner
// }
// var f = outer()
// f()
// f()
// f()

// function f(a) {
//     "use strict";
//     a=42;
//     return a==arguments[0];
// }
// f(5);
// function f(str) {
//     "use strict";
//     return eval(str)
// }
// f('console.log(1)');
// console.log('' == false);
// console.log('' == 0);
// console.log('' == []);
// console.log('' == {});
// var a = 0;
// function b(c) {
//     console.log(a);
//     var a = 1;
//     arguments[0] = 2;
//     console.log(c);
//     console.log(a);
// }
// b(3);
// console.log(a);
// var a = 0;
// var obj = {
//     a:'obj',
//     b:function(a){
//         setTimeout(function(){
//             console.log(this.a);
//         },1000)
//     }
// }
// obj.b(1);

// console.log(typeof function () {
// });

// var strNumber = '100';
// var intNumber = 50;
// console.log(strNumber + intNumber);
// console.log(strNumber - intNumber);
// console.log(strNumber / intNumber);

// function magic(n) {
//     let arr = ''
//     while(n>0) {
//         if (n%2==0) {
//             n = n/2 -1
//             arr = '2' + arr
//         } else {
//             n = (n-1)/2
//             arr = '1' + arr
//         }
//     }
//     return arr
// }
//
// console.log(magic(11));

// function count(str) {
//     let arr = str.split("")
//     let count = [1]
//     let flag = false
//     for (let i=1, j=0;i<arr.length;i++) {
//         if (arr[i] == arr[i-1]) {
//             flag = true
//         } else {
//             flag = false
//         }
//         if (flag) {
//             count[j]++
//         } else {
//             count[++j] = 1
//         }
//     }
//     let sum = count.reduce((pre, cur)=>{
//         return pre + cur
//     })
//     let res = (sum/count.length).toFixed(2)
//     return res
// }
// let str = 'aaabbaaac'
// console.log(count(str));

// var str = `${'hello'} world`
// var boolean = false ?? true
// var chars =

// var name = 'window';
// var obj = {
//     name: 'netease',
//     print1: () => {
//         console.log(this.name);
//     },
//     print2 () {
//         console.log(this.name);
//     }
// };
// obj.print1();
// obj.print2();

// var str = ''
// console.log(Number(str));
// console.log(String(str));
// console.log(Boolean(str));

// var arr = []
// var arr1 = new Array()
// console.log(arr.constructor);
// console.log(typeof arr1);

// setTimeout(function() {
//     console.log(1);
// }, 100);
// setTimeout(function() {
//     console.log(2);
// }, 0);
// console.log(3);

// while(line=readline()){
//     var lines = line.split(' ');  //字符串转换为字符数组
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     a = magic(a);
//     print(a);
// }
// var str = '111101111'
// function change(str) {
//     var arr = str.split('')
//     var res = [arr[0]]
//     var len = 0
//     for (let i=1;i<arr.length;i++) {
//         if (arr[i]!=arr[i-1]){
//             res.push(arr[i])
//             len = len>res.length?len:res.length
//         } else {
//             len = len>res.length?len:res.length
//             res = [arr[i]]
//         }
//     }
//     return len
// }
//
// console.log(change(str));
// function magic(x,f,d,p) {
//     let daymax = Math.floor((d+f*p)/(p+x))
//     var day
//     if (daymax>f) day = daymax
//     console.log(day);
//     if (daymax <= f){
//         var daymin = Math.floor(d/x)
//         if (daymin<=f){
//             day = daymin
//         } else {
//             day = daymax
//         }
//     }
//     return day==1000000001?1000000000:day
// }
//
// console.log(magic(1, 1000000000 ,2000000000 ,1000000000));

// let data = {1:222, 2:123, 5:888};
// // let arr = Array.from({length: 12}).map((item,index)=> {
// //     return data[index+1] || null
// // })
// let arr = Array.from({length: 12}).fill(null)
// Object.keys(data).forEach(index =>{
//     arr[index-1] = data[index]
// })
// console.log(arr);
// let data = {1:222, 2:123, 5:888};
// let arr = Array.from({length:12}).fill(null);
// Object.keys(data).forEach(it=>arr[it-1] = data[it]);
// console.log(arr);

// function combine(){
//     let arr = [].concat.apply([], arguments);
//     console.log(arr);//没有去重复的新数组
//     let set = new Set(arr)
//     console.log(set);
//     return Array.from(set);
// }
//
// var m = [1, 2, 2], n = [2,3,3];
// console.log(combine(m,n));
// var m = [1,2,3]
// var mm = new Array(1,2,3)
// // console.log(m, mm);
// console.log(m.__proto__.__proto__.__proto__);
// console.log(mm.__proto__);
// console.log(Array.prototype);
// console.log(Array.__proto__);
// var a = {n: 1};
// var b = a;
// a.x = a = {n: 2};
//
// console.log(a.x)
// console.log(b.x)
//
// let arr = [1,2,3]
// arr.forEach((item,index) => {
//     arr[index] = item +1
// })
// // console.log([] == '');
//     console.log(arr);

// function baz() {
//     // 当前调用栈是：baz
//     // 因此，当前调用位置是全局作用域
//     console.log(this);
//     console.log( "baz" );
//     bar(); // <-- bar的调用位置
// }
//
// function bar() {
//     // 当前调用栈是：baz --> bar
//     // 因此，当前调用位置在baz中
//     console.log(this);
//     console.log( "bar" );
//     foo(); // <-- foo的调用位置
// }
//
// function foo() {
//     // 当前调用栈是：baz --> bar --> foo
//     // 因此，当前调用位置在bar中
//     console.log(this);
//     console.log( "foo" );
// }
//
// baz(); // <-- baz的调用位置

// function func(...rest) {
//     console.log(rest);
//     console.log(Array.from(arguments));
// }
// func(1,2,2,3,5)

// Array.prototype.method = function () {
//     console.log(this.length)
// }
//
// var arr = [1,2,3]
// arr.name = 'array'
// console.log(arr);
// for (var value of arr) {
//     console.log(value);
// }
// for (var index in arr) {
//     console.log(arr[index]);
// }

// var n1=1,n2 =2
// function cal() {
//     n1 = 10
//     n2 = 20
//     // this.n1 = 10
//     // this.n2 = 20
//     // console.log(this.n1);
//     // console.log(this.n2);
//     console.log(this.n1 + this.n2);
// }
// var calBind = cal.bind({n1:100,n2:200})
//
// new cal()
// cal()
// new calBind()
// calBind()

// function func(a) {
//     console.log(a);
//     var a = 2
//     function a() {}
// }
// func(1)

// var b =  {
//     val: 0,
//     toString: function () {
//         console.log("in");
//         return this.val++
//     }
// }

// let a = {
//     val: 0
// }
// const handler = {
//     get: function (target) {
//         return target.val++
//     }
// }
// let p = new Proxy(a, handler)
// console.log(p.val);
// console.log(p.val);
// const data = {
//     val: -1
// }
// // Object.defineProperty(data, 'b', {
// //     get: function() {
// //         return data.val++
// //     }
// // })
// const proxy = new Proxy(data, {
//     get: function (target, property) {
//         return target[property]
//     },
//     set: function (target, property, value) {
//         target[property] = value
//     }
// })

// console.log(Proxy.__proto__);

// Proxy.prototype.toString = function () {
//     return this.val++
// }

// console.log(proxy.val);
// proxy.val.toString()
// console.log(proxy.val);
// b = proxy.val
// console.log(proxy.val);
// proxy.val = proxy.val + 10
// console.log(proxy.val);
// console.log(b == b + 1);
// var b = Number(Infinity);
// console.log(b==0&&b==1&&b==2)
// console.log(p.val == p.val + 1);
// console.log(p.val);
// function changeObjProperty(o) {
//     o.n = 1
//     o = new Object()
//     console.log(o);
//     o.siteUrl = "http://www.google.com"
// }
// let webSite = new Object();
// changeObjProperty(webSite);
// console.log(webSite);

// console.log(a);    // f a() {console.log(10)}
// console.log(a());    //  undefined
// var a = 3;
//
// function a() {
//     console.log(10) //10
// }
// console.log(a)   //3
// a = 6;
// console.log(a());  //a is not a function;

// function Foo() {
//     Foo.a = function() {
//         console.log(1)
//     }
//     // this.a = function() {
//     //     console.log(2)
//     // }
// }
// Foo.prototype.a = function() {
//     console.log(3)
// }
//
// // console.log(Foo.a);
// Foo.a = function() {
//     console.log(4)
// }
// Foo.a();
// let obj = new Foo();
// obj.a();
// Foo.a();

// var msg = 'shanghai'
// msg = msg.replace(/shang/g, "ayo")
// console.log(msg);

// setImmediate(function(){
//     console.log(1);
// });

// setTimeout(function () {
//     console.log(3);
// },0)
//
//
//
// console.log(2);

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }

// new Promise(function (resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function () {
//     console.log('promise2');
// });
//
// async function async1() {
//     console.log('async1 start');
//     Promise.resolve(async2()).then(() => {
//             console.log('async1 end')
//         }
//     )
// }
//
// // async function async1() {
// //     console.log('async1 start');
// //     await async2();
// //     console.log('async1 end');
// // }
//
// async function async2() {
//     console.log('async2');
// }
//
// console.log('script start');
// setTimeout(function () {
//     console.log('setTimeout');
// }, 0)
// async1();
// console.log('script end');

// x = 10
// function func(num) {
// //     let arr = Array.from(x+'')
// //     let start = 0
// //     let end  = arr.length - 1
// // // console.log(start, end);
// //     while(start<end) {
// //         if (arr[start]!==arr[end]) {
// //             return false
// //         }
// //         start++
// //         end--
// //     }
// //     return true
//     let arr = num.toString().split('')
//     let res = arr.join('')
//     let bar = arr.reverse().join('')
//     return bar===res?true:false
// }
//
// console.log(func(x));

// var merge = function (nums1, m, nums2, n) {
//     let n1 = nums1.slice(0, m)
//     // console.log(n1);
//     n1 = n1.sort((a,b)=>a-b)
//     // console.log(nums1);
//     // n1 = nums1.slice(nums1.length-m)
//     nums2 = nums2.sort((a,b)=>a-b)
//     // console.log(n1, nums2);
//     if (m === 0) {
//         while(n-1>=0) {
//             nums1[n-1] = nums2[n-1]
//             n--
//         }
//     }
//     else {
//         let e1 = m - 1, e2 = n - 1
//         while (e2 >= 0 && e1 >= 0) {
//             if (n1[e1] > nums2[e2]) {
//                 nums1[e1 + e2 + 1] = n1[e1]
//                 e1--
//             } else {
//                 nums1[e2 + e1 + 1] = nums2[e2]
//                 e2--
//             }
//         }
//         if (e1 < 0) {
//             while (e2 >= 0) {
//                 nums1[e2] = nums2[e2]
//                 e2--
//             }
//         }
//         if (e2 < 0) {
//             while (e1 >= 0) {
//                 nums1[e1] = n1[e1]
//                 e1--
//             }
//         }
//     }
//     return nums1
// };
// console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3));
//
// var myArray = ["value1", "value2", "value3"];
//
// // 用Set构造器将Array转换为Set
// var mySet = new Set(myArray);
// console.log([...mySet]);

// const obj = [1, 2, 3]
// Array.prototype.method = function () {
//
// }
// // console.log(obj.__proto__.constructor);
// obj[4] = 'Ayou'
// obj.nex = {length: 3}
//
// for (let item in obj) {
//     if (obj.hasOwnProperty(item)) {
//         console.log("in " + obj[item]);
//     }
//
// }
//
// Object.keys(obj).forEach(key => {
//     console.log("forEach " + obj[key]);
// })
//
// for (let val of obj) {
//     console.log("of " + val);
// }

// const data = {
//     name: 'Ayou',
//     age: 25
// }
// Object.keys(data).forEach(key=>{
//     Object.defineProperty(data,key, {
//         enumerable: true,
//         // writable: false,
//         configurable: false,
//         get: function () {
//             console.log(`get value`);
//             // console.log(`${data[key]}`);
//         },
//         set: function (val) {
//             console.log('set name');
//             // data.key = val
//             // data[key] = val
//         }
//     })
// })
//
// // data.name = 'XBB'
// // data.name
// // data.name
// // data.age
// // console.log(data);
// for (let key in data) {
//     console.log(key);
// }

// let arr = ['a', ['b', 'c'], 2, ['b', 'a'], 'g', 3, 4]

// 数组拍平1
// arr1 = arr.toString().split(",")
// console.log(arr1);
// 2
// 递归调用
// 3
// Symbol.iterator??
// 4


// console.log(arr);
// let s = new Set(arr)
// console.log(s);


// arr = arr.concat([1,2,3])
// console.log(arr);

// Array.prototype[Symbol.iterator] = function () {
//     let arr = [].concat(this)
//     let getFirst = function (array) {
//         let first = array.shift()
//         return first
//     }
//     return {
//         next: function () {
//             let item = getFirst(arr)
//             if (item) {
//                 return {
//                     value: item,
//                     done: false
//                 }
//             } else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }
//
// var flat = function (arr) {
//     let r = []
//     for (let i of arr) {
//         console.log(i);
//         r.push(i)
//     }
//     return r.join(',')
// }
// console.log(flat(arr));
// Array.prototype.toString = function () {
//     return this.join(',')
// }
// Array.prototype.valueOf = function () {
//     return this.join(',')
// }
// console.log(arr + '');

// function handleFlat(arr) {
//     let res = []
//     arr.forEach(item => {
//         let isArr = Array.isArray(item)
//         if (isArr) {
//             res = res.concat(handleFlat(item))
//         } else {
//             res.push(item)
//         }
//     })
//     return res
// }
//
// console.log(handleFlat(arr).join(','));

// var ws = new WeakSet()
// const obj = {}
// let arr1 = []
// ws.add(obj)
// ws.add(arr1)
// console.log(ws.has(obj));
// console.log(ws.size);

// var myMap = new Map()
// var keyOne = 'key one'
// myMap.set(keyOne,  "key1")
// console.log(myMap);
// console.log(myMap.get(keyOne));
// console.log(myMap[keyOne]);
//
// var kvArray = [["key1",  ["key2", "value2"]], ["key2", "value2"]];
//
// // 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
// var myMap = new Map(kvArray);
// console.log(myMap);

// var length = 10;
//
// function fn() {
//     console.log(this);
//     console.log(this.length)
// }
// var obj = {
//     length: 5,
//     method: function (fn) {
//         // fn();
//         // console.log(arguments);
//         arguments[0]();
//     }
// }
// obj.method(fn)

// // 生成随机长度的字符串
// function getRandomString(n) {
//     let str = Math.random().toString(36).substr(2)
//     if (str.length>=n) {
//         return str.substr(0, n)
//     }
//     str += getRandomString(n-str.length)
//     return str
// }
// const n = 50
// console.log(getRandomString(n));

// let arr1 = [1, [2, 3]]
// console.log(arr1.toString().split(','));
//
// function f(arr, a, b) {
//     console.log(arguments);
//     arguments[1]()
// }
//
// f(arr1, function () {
//     console.log(this);
// }, 2)

// console.log("1 "+a);    // f a() {console.log(10)}
// console.log("2 "+a(20));
// var a = 3;
//
//
// function a(a) {
//     console.log("3 "+a) //10
//     var a =10
//     console.log(a);
// }
// console.log("4 "+a)   //3
// a = 6;
// console.log("5 "+a());  //a is not a function;
// let obj1 = {
//     name: 'Ayo',
//     color: [1, {id: 1, val: 2}, 3],
//     innerObj: {
//         name: 'inner',
//         color: [2, 3, 4]
//     },
//     length: 3
// }
// // // arr1 = Array.from(obj1)
// // // console.log(arr1);
// // // console.log(Array.isArray(arr));
// // // console.log(arr);
// // let objKey = Object.keys(obj1)
// // for (let val of objKey){
// //     console.log(obj1[val]);
// // }
//
// obj1.color.forEach((item,index)=>{
//     obj1.color[index] = 999
//     item = item + "!!!"
// })
// console.log(obj1);

