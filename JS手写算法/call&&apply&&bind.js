// call
Function.prototype.myCall = function (context, ...arr) {
    // context 对应输入的第一个参数 而非全部参数
    context = context ? Object(context) : window
    // this指向被借用的方法
    context.fn = this
    // 将方法作为context的属性 在下一步调用时 this自动指向context
    let result = context.fn(...arr)
    delete context.fn
    return result
}
// apply
Function.prototype.myApply = function (context) {
    // context = context || window
    context.fn = this
    let result
    let args = arguments[1]
    console.log(args);
    if (!args) context.fn()
    else {
        // args = Array.from(args)
        result = context.fn(...args)
    }
    delete context.fn
    return result
}
// bind
Function.prototype.myBind = function (objThis, ...params) {
    if (typeof this !== "function") throw new Error("Function.prototype.bind - what is trying to be bound is not callable")
    const thisFn = this
    let fToBind = function (...secondParams) {
        // 如果使用了new 构造 则要让this失效
        const context = this instanceof fToBind ? this : objThis
        return thisFn.call(context, ...params, ...secondParams)
    }
    // 维护原型关系 保证bind后的方法继承原型上的方法和值
    fToBind.prototype = Object.create(thisFn.prototype)
    return fToBind
}

// 测试一下
// var value = 2;
//
// var obj = {
//     value: 1
// }
//
// function bar(name, age) {
//     console.log(this.value);
//     return {
//         value: this.value,
//         name: name,
//         age: age
//     }
// }

//bind
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.myBind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin


// bar.myCall(null); // 2

// console.log(bar.myApply(obj, ['kevin', 18]));