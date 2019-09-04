// coancat拼接 快排
const quickSort1 = arr => {
    if (arr.length <= 1) {
        return arr;
    }
    //取基准点
    const midIndex = Math.floor(arr.length / 2);
    //取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
    const valArr = arr.splice(midIndex, 1);
    const midIndexVal = valArr[0];
    const left = []; //存放比基准点小的数组
    const right = []; //存放比基准点大的数组
    //遍历数组，进行判断分配
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midIndexVal) {
            left.push(arr[i]); //比基准点小的放在左边数组
        } else {
            right.push(arr[i]); //比基准点大的放在右边数组
        }
    }
    //递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
    return quickSort1(left).concat(midIndexVal, quickSort1(right));
};
const array2 = [5, 4, 3, 2, 1];
console.log('quickSort1 ', quickSort1(array2));
// quickSort1: [1, 2, 3, 4, 5]

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