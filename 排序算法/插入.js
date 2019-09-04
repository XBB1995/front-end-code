// 普通插入 二分法优化
function insertSort(arr) {
    if (Object.prototype.toString.call(arr).slice(8, -1) === "Array") {
        console.time("INSERT")
        for (let i = 1; i < arr.length; i++) {
            let j = i - 1, key = arr[i], s = 0, e = i - 1
            while (s <= e) {
                let m = parseInt((s + e) / 2)
                if (key < arr[m]) {
                    e = m - 1
                } else {
                    s = m + 1
                }
            }
            for (; j >= s; j--) {
                arr[j + 1] = arr[j]
            }
            arr[s] = key
        }
        console.timeEnd("INSERT")
        return arr
    }
}

// test
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(insertSort(arr));