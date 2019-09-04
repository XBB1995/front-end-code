// 保留三位小数
console.log(parseToMoney(55555.56));; // return '1,234.56'
console.log(parseToMoney(123456789));; // return '123,456,789'
console.log(parseToMoney(1087654.321));; // return '1,087,654.321'

function parseToMoney(num) {
    // return num.toLocaleString()
    // num = parseFloat(num.toFixed(3))
    // let res = ''
    // let [arrLeft, arrRight] = String.prototype.split.call(num, ".")
    // let len = arrLeft.length
    // let i = len % 3,
    //     j = (len - len % 3) / 3
    // res = arrLeft.slice(0, i)
    // while (j > 0) {
    //     res += "," + arrLeft.slice(i, i + 3)
    //     i += 3
    //     j--
    // }
    // if (len % 3===0) {
    //     res = res.substr(1)
    // }
    //
    // res += arrRight?"." +arrRight:""
    // console.log(res);

    num = parseFloat(num.toFixed(3));
    // let [integer, decimal] = String.prototype.split.call(num, '.');
    let [integer, decimal] = num.toString().split(".");
    integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
    return integer + (decimal ? "." + decimal : '');

}

// var str = "2018ceshi2019";
//
// var reg = /\d\w/;
// console.log(reg.exec(str));//["20", index: 0, input: "2018ceshi2019"]
//
// var reg = /(\d)(\w)/;
// console.log(reg.exec(str));//["20", "2", "0", index: 0, input: "2018ceshi2019"]
//
// var reg = /(?:\d)(?:\w)/;
// console.log(reg.exec(str));//["20", index: 0, input: "2018ceshi2019"]