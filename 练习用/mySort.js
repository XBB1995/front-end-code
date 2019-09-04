var arr = [3, 44, 38, 4, 4, 6, 5, 5, 5, 54, 7, 15, 6, 6, 36, 26, 27, 2, 46, 4, 19, 50, 48];

// 冒泡排序 + flag
function sortByBubble(arr) {
    let len = arr.length
    let flag = true
    for (let i = 0; i < len && flag; i++) {
        flag = false
        for (let j = len - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
                flag = true
            }
        }
    }
    return arr
}

// 插入排序
function sortByInsert(arr) {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        let temp = arr[i]
        for (var j = i; j > 0 && temp < arr[j - 1]; j--) {
            arr[j] = arr[j - 1]
        }
        arr[j] = temp
    }
    return arr
}

// 选择排序
function sortBySelect(arr) {
    let len = arr.length
    let min
    for (let i = 0; i < len; i++) {
        min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if (min != i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

// 快速排序
function sortByQuick(arr, start, end) {
    if (start < end) {
        let res = partition(arr, start, end)
        sortByQuick(arr, start, res - 1)
        sortByQuick(arr, res + 1, end)
    }
}

function partition(arr, start, end) {
    let comp = arr[start]
    while (start < end) {
        while (comp <= arr[end] && start < end) end--
        arr[start] = arr[end]
        while (comp >= arr[start] && start < end) start++
        arr[end] = arr[start]
    }
    arr[start] = comp
    return start
}

sortByQuick(arr, 0, arr.length - 1)
console.log(arr);

function myReverse(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let temp = arr[end]
        arr[end--] = arr[start]
        arr[start++] = temp
    }
}

// myReverse(arr)
// console.log(arr);

// 使用对象
// let obj = {}
// let res = []
// for (let i of arr) {
//     if (!obj[i]) {
//         res.push(i)
//         obj[i] = 1
//     }
// }
// res = [arr[0]]
// for (let i =1;i<arr.length;i++){
//     arr[i] !== arr[i-1] && res.push(arr[i])
// }
//
// console.log(res);
// res = Array.prototype.filter.call(arr, (item, index) => {
//     return arr.indexOf(item) === index
// })
//
// console.log(res);

// arr = new Set(arr)
//
// console.log(Array.from(arr));

// console.log("" == 0); // 输出啥
// console.log("" == null) // 输出啥
// console.log([] == null) // 输出啥

// function camelcase(str) {
//     let arr = str.split("-")
//     for (let i=1;i<arr.length;i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1,)
//     }
//     return arr.join("")
// }
//
// console.log(camelcase('aa-bb'));; // 输出aaBb
// console.log(camelcase('aa-bb-cc'));; // 输出aaBbCc

// function ClassA(name){
//     console.log(typeof this);
//     this.name = name;
//     this.sayName = function(){
//         console.log(this.name);
//     }
// }
//
// let a = new ClassA("zhangsan")
// ClassA("lisi")

// if (""==false) {console.log(1);};
// if ([]) {console.log(3);};
// // if ({} == false ) {console.log(2);};
// if ({}) {console.log(2);};
// if (undefined == undefined) {console.log(4);};
//
// console.log({}+[]);
// console.log([]+{});

// function foo(something){
//     this.a = something;
// }
//
// var obj1 = {
//     foo:foo
// };
//
// var obj2 = {};
//
// obj1.foo(2)
//
// console.log(obj1.a) // 2 ,此时的 this 上下文还在 obj1内,若是 obj1.foo 先保存当做引用再执行传参,则上下文为 window
//
// obj1.foo.call(obj2,3); // 用 call 强行改变上下文为 obj2内
// console.log(obj2.a); // 3
//
// var  bar = new obj1.foo(4); // 这里产生了一个实例
// console.log(obj1.a); // 2
// console.log(bar.a); // 4;  new的绑定比隐式和显式绑定优先级更高

// var test = 'abc345efgabcab'
// var temp = test.split("").map(item =>{
//     return /^\d$/.test(item) ? item *2:item
// }).join("")
// console.log(temp);

// function power(num, n) {
//     if (n == 1) return num
//     if (num == 0 && n != 0) return 0
//     if (n % 2 == 0) {
//         let temp = power(num, n / 2)
//         return temp * temp
//     }
//     if (n % 2 == 1) {
//         let temp = power(num, (n - 1) / 2)
//         return temp * temp * num
//     }
// }
//
// console.log(power(2, 10));
// b = [2,0,0]
// let newB = parseInt([].join.call(b, ''))
// console.log(newB);
// var superPow = function (a, b) {
//     let ret = 1
//     for (let i in b) {
//         ret = (pow(ret, 10) * pow(a, b[i])) % 1337
//     }
//     return ret
// };
// var pow = function (a, n) {
//     if (n == 0) return 1
//     if (n == 1) return a % 1337
//     return (pow(a%1337, Math.floor(n / 2)) * pow(a%1337, n - Math.floor(n / 2))) % 1337
// }
// console.log(superPow(2147483647, [2, 0, 0]));

// var studentList = [
//     {"name": "张三1", "class": 2, "score": 64},
//     {"name": "张三2", "class": 2, "score": 65},
//     {"name": "李四", "class": 1, "score": 80},
//     {"name": "李四3", "class": 1, "score": 81},
//     {"name": "王五", "class": 1, "score": 85},
//     {"name": "王五er", "class": 1, "score": 85},
//     {"name": "赵六", "class": 4, "score": 94},
//     {"name": "赵六er", "class": 4, "score": 93},
//     {"name": "赵六33", "class": 3, "score": 9},
// ]
// function sortStudents(students) {
//     // body...
//     students.sort((a,b)=>{
//         if (a.class===b.class)
//             if (a.score===b.score)
//                 return 0;
//             else return b.score - a.score;
//         else return a.class - b.class;
//     });
//     return JSON.stringify(students);
// }
// console.log(sortStudents(studentList));
// var stuOBJ = {}
// studentList.map(item=>{
//     if (!stuOBJ[item.class]) {
//         stuOBJ[item.class] = [item]
//     } else {
//         stuOBJ[item.class].push(item)
//     }
// })
// // console.log(stuOBJ);
// var array = []
// for (let item in stuOBJ) {
//     // console.log(stuOBJ[item]);
//     var arr1 = stuOBJ[item]
//     arr1.sort((s1, s2)=>{
//         return s2.score - s1.score
//     })
//     array = array.concat(arr1)
// }
// console.log(JSON.stringify(array));

// var arr = [1, 3, 4, 6, 8, 9, 10]
//
// function seek(arr) {
//     let obj = {
//         0: [arr[0]]
//     }
//     arr = arr.sort((a,b)=>a-b)
//     let j = 0
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i]-arr[i-1]==1) {
//             if (!obj[j]) {
//                 obj[j] = [arr[i]]
//             }else{
//                 obj[j].push(arr[i])
//             }
//         } else {
//             j++
//             if (!obj[j]) {
//                 obj[j] = [arr[i]]
//             }else{
//                 obj[j].push(arr[i])
//             }
//         }
//     }
//     let a = []
//     for (let i in obj) {
//         let len = obj[i].length
//         if (len == 1) a.push(parseInt(obj[i]))
//         else {
//             let str = obj[i][0] + "-" + obj[i][len-1]
//             a.push(str)
//         }
//     }
//     return a
// }

// console.log(seek(arr));

console.log(([]) ? true : false);
console.log(([] == false ? true : false));
console.log(({} == false) ? true : false)