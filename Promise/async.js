// 理解 async await
// async function testAsync() {
//     console.log("going now")
// await function () {
//     console.log("await")
// }
// return 'hello'
// }
// testAsync().then(res=>{
//     throw "error!"
// }).catch(e=>{
//     console.log(e);
// })
// testAsync()

// function getSomething() {
//     return "something";
// }
//
async function testAsync() {
    return Promise.resolve("hello async");
}

// console.log(testAsync());
//
// async function test() {
//     const v1 = await getSomething();
//     const v2 = await testAsync();
//     console.log(v1, v2);
// }
//
// test();

function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(n + 200)
        }, n)
    })
}

// takeLongTime(2000).then(v=>{
//     console.log("got " + v);
// })
//
// async function test() {
//     let val = await takeLongTime(500)
//     console.log(val);
// }
// test()

function step1(n) {
    console.log(`step1 with ${n}`)
    return takeLongTime(n)
}

function step2(m, n) {
    console.log(`step2 with ${m} with ${n}`)
    return takeLongTime(m + n)
}

function step3(k, m, n) {
    console.log(`step3 with ${k} with ${m} with ${n}`)
    return takeLongTime(k + m + n)
}

// function doIt() {
//     console.time("doIt");
//     const time = 500
//     step1(time).then(time => step2(time))
//         .then(time => step3(time))
//         .then(res => {
//             console.log("result " + res);
//             console.timeEnd("doIt")
//         })
// }

async function doIt() {
    console.time("doIt")
    const time = 300
    const time1 = await step1(time)
    const time2 = await step2(time,time1)
    const res = await step3(time,time1,time2)
    console.log("result " + res);
    console.timeEnd("doIt")
}

console.log(2);
doIt()
console.log(1);

// async function getStockPricesByName(name) {
//     var symbol = await getStockSymbol(name)
//     var stockPrice = await getStockPrice(symbol)
//     return stockPrice
// }
//
// getStockPricesByName("goog").then(res => console.log(res))