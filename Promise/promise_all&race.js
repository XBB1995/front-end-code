Promise.prototype.myall = function (promiseList) {
    let result = []
    let count = 0
    return new Promise((resolve, reject) => {
        for (let item of promiseList) {
            item.then(res => {
                    result.push(res)
                    if (++count == promiseList.length) {
                        resolve(result)
                    }
                }, rej => reject(rej)
            )
        }
    })
}
//
Promise.prototype.myrace = function (promiseList) {
    return new Promise((resolve, reject) => {
        for (let item of promiseList) {
            item.then(res => resolve(res), rej => reject(rej))
        }
    })
}

// let a,
//     barObj = { msg: 'ba99r的this指向' };
// fooObj = { msg: 'foo的this指向' };
// bar.call(barObj); // 将bar的this指向barObj
// bar.call(fooObj); // 将foo的this指向fooObj
// foo.call(fooObj)
// function foo() {
//     a(); // 结果：{ msg: 'bar的this指向' }
// }
// function bar() {
//     a = () => {
//         console.log(this, 'this指向定义的时候外层第一个普通函数'); //
//     }; // 在bar中定义 this继承于bar函数的this指向
// }

// function func(a) {
//     console.log(a);
//     var a = 2
//
// }
//
// func(4)

// var a = 7
//
// let b = () => {
//     let a = 8
//     console.log(this.a)
//     console.log(this);
// }
// b() //undefined

// let a = false || function() {}; // ok
// let b = false || (4) => {}; // Malformed arrow function parameter list
// let c = false || (() => {}); // ok

// var simpleStr = "XBB"
// var simpleStr = new String("XBB")
// console.log(simpleStr.prototype);
// console.log(simpleStr.__proto__);

// function Shape() {
//     this.x = 1
//     this.y = 2
//     // this.notify = function () {
//     //     console.log(this.x, this.y);
//     // }
// }

// var s = new Shape()
// s.notify()

// Shape.prototype.move = function (x, y) {
//     this.x += x
//     this.y += y
//     console.log('Moved');
// }
//
// function Rectangle() {
//     Shape.call(this)
// }
//
// Rectangle.prototype = Object.create(Shape.prototype)
// // 将方法绑定下来
// console.log(Rectangle.prototype.constructor);
//  // 重新制定constructor
// Rectangle.prototype.constructor = Rectangle
// console.log(Rectangle.prototype.constructor);
//
// var rect = new Rectangle()
// console.log(rect.x);
// console.log(rect.y);
// // rect.notify()
// rect.move(2,3)
// console.log(rect.x);
// console.log(rect.y);
//
//
// console.log(rect instanceof Rectangle);
// console.log(rect instanceof Shape);

// var test1 = {x:1};
//
// var test2 = new Object(test1);
//
// var test3 = Object.create(test1);
// console.log(test3);//{}
// //test3等价于test5
// var test4 = function(){
//
// }
// test4.prototype = test1;
// var test5 = new test4();
// console.log(test5);
// console.log(test5.__proto__ === test3.__proto__);//true
// console.log(test2);//{x:1}

// var test = Object.create({x:123,y:345});
// console.log(test);//{}
// console.log(test.x);//123
// console.log(test.__proto__.x);//3
// console.log(test.__proto__.x === test.x);//true
//
// var test1 = new Object({x:123,y:345});
// console.log(test1);//{x:123,y:345}
// console.log(test1.x);//123
// console.log(test1.__proto__.x);//undefined
// console.log(test1.__proto__.x === test1.x);//false
//
// var test2 = {x:123,y:345};
//
// console.log(test instanceof Object);
// console.log(test2);//{x:123,y:345};
// console.log(test2.x);//123
// console.log(test2.__proto__.x);//undefined
// console.log(test2.__proto__.x === test2.x);//false

