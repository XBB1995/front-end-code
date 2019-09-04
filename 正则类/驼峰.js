var s1 = "get-element-by-id"

// 转化为 getElementById

// var f = function (s) {
//     let arr = s.split("-")
//     let res = arr[0]
//     for (let i=1;i<arr.length;i++) {
//         res += arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)
//     }
//     return res
// }

// 正则表达式
var f = function (s) {
    return s.replace(/-\w/g, e=>{
        return e.slice(1).toUpperCase()
    })
}

// 驼峰转回
var fback = function(s) {
    return s.replace(/[A-Z]/g, e=>{
        return "-" + e.toLowerCase()
    })
}

console.log(fback(f(s1)));;