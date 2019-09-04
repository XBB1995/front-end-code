// let p = new Promise(function (resolve, reject) {
//     resolve("Ayo")
// })

// Promise.resolve().then(res => {
//     console.log("!");
// })

// p.then(res => {
//     console.log(res);
// })

// Promise.resolve = function (val) {
//     return new Promise((resolve, reject) => {
//         resolve(val)
//     })
// }

// Promise.prototype.myAll = function (promises) {
//     let arr = []
//     let count = 0
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < promises.length; i++) {
//             promises[i].then(data => {
//                 arr.push(data)
//                 count++
//             }, reject)
//         }
//         if (count === promises.length) {
//             resolve(arr)
//         }
//     })
// }
//
// Promise.prototype.myRace = function (promises) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < promises.length; i++) {
//             promises[i].then(data => {
//                 resolve(data)
//             }, reject)
//         }
//     })
// }

// Promise.all = function(promises){
//     let arr = []
//     let i = 0
//     function processData(index,data){
//         arr[index] = data
//         i++
//         if(i == promises.length){
//             resolve(arr)
//         }
//     }
//     return new Promise((resolve,reject)=>{
//         for(let i=0;i<promises.length;i++){
//             promises[i].then(data=>{
//                 processData(i,data)
//             },reject)
//         }
//     })
// }
// const fn = function() {
//
// }
// // 初始化的两种方式
// let p1 = new Promise(fn)
// let p2 = Promise.resolve(fn)

// const first = () => (new Promise((resolve,reject)=>{
//     console.log(3);
//     // let p1 = new Promise((resolve, reject)=>{
//     //     reject()
//     // })
//     let p1 = Promise.reject()
//     // console.log(p1);
//     let p = new Promise((resolve, reject)=>{
//         console.log(7);
//         // reject("error");
//         // console.log("still");
//         setTimeout(()=>{
//             console.log(5);
//             resolve(6);
//         },0)
//         resolve(1);
//     });
//     resolve(2);
//     p.then((arg)=>{
//         console.log(arg +"!");
//     }).catch(e=>{
//         console.log(e);
//     });
//     p1.then(()=>{
//         console.log("then is coming");
//     }).catch(()=>{
//         console.log("find a reject");
//     })
//
// }));
//
// first().then((arg)=>{
//     console.log(arg);
// });
// console.log(4);

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve('res')
//         }, ms)
//         reject("not now!")
//     })
// }
//
// timeout(500).then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// })

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('once')
//         resolve('success')
//     }, 1000)
// })
//
// const start = Date.now()
// console.log("1");
// promise.then((res) => {
//     console.log(res, Date.now() - start)
// })
// promise.then((res) => {
//     console.log(res, Date.now() - start)
// })

// Promise.reject()
//     .then(() => {
//         return  new Error('error!!!')
//     })
//     .then((res) => {
//         console.log('then: ', res)
//     })
//     .catch((err) => {
//         console.log('catch: ', err)
//     })

// Promise.resolve(1)
// .then(()=>2).then().then(console.log)

Promise.resolve()
    .then(function success (res) {
        console.log("succ");
        throw new Error('error')
    }, function error() {
        console.log("error");
    })
    .catch(function fail2 (e) {
        console.log('fail2: ', e)
    })
