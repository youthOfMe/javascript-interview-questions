// 只要这个函数是以普通函数的形式被调用
function fn1() {
    console.log(this); // 指向全局对象
}
fn1()

function fn2() {
    'use strict'
    console.log(this)
}
fn2()

// 上面介绍了以函数的形式调用 this 指向
// 这种题目有一种变形
var foo = {
    bar: 10,
    func() {
        console.log(this)
        console.log(this.bar)
    }
}
var fn3 = foo.func
fn3()
foo.func()


// 如果一个函数是以对象方法的形式被调用
// 那么this指向该对象
var stu = {
    name: "zhangsan",
    fn() {
        return this
    }
}
console.log(stu.fn() === stu)

var stu = {
    name: "zhangsan",
    son: {
        name: "zhangxiaosan",
        fn() {
            return this.name
        }
    }
}
console.log(stu.son.fn());

var o1 = {
    text: 'o1',
    fn() {
        return this.text
    }
}

var o2 = {
    text: 'o2',
    fn() {
        return o1.fn()
    }
}

var o3 = {
    text: 'o2',
    fn() {
        var fn2 = o1.fn
        return fn2()
    }
}

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1
console.log(o3.fn()); // undefined

// call
// A.call(B)
// A通常是一个方法(函数)
// B通常是一个对象
// 调用A方法 但是this指向B这个对象

var obj = {}
function fn() {
    return this
}
console.log(fn() === global)
console.log(fn.call(obj) === obj);

// 下面的情况 this指向全局对象
console.log(fn.call());
console.log(fn.call(null))
console.log(fn.call(undefined))
// 总之this会指向你传入的对象

// 指向包装对象
console.log(fn.call(true));

// call 第一个参数是this指向的对象
// 之后的参数就是参数列表 这些参数会传递给前面的方法
function add(a, b) {
    return a + b
}
console.log(add.call(null, 1, 2));

var obj = {}
// hasOwnProperty 该方法是查看一个对象是否有某一个属性或者方法
// 这个属性或者方法必须是自身就有的 而不是继承而来的
console.log(obj.hasOwnProperty('toString'))
console.log(obj.toString()) // [object Object]

// 通过上面的例子 可以知道
// obj 能够调用toString 但是 toString这个方法并不是自身所拥有的
obj.hasOwnProperty = function() {
    return 'aaa'
}
console.log(obj.hasOwnProperty('toString')) // aaa

// 上面我们对 hasOwnProperty这个方法进行了覆盖
// 使用call可以调用原生的方法
// hasOwnProperty在Object.property上
console.log(Object.prototype.hasOwnProperty.call(obj, 'toString'));

// apply
// 该方法和call基本上一模一样
// 区别仅仅是后面参数的区别 call后面是参数列表
// 而apply后面是参数数组

// 使用apply调用原生方法
var arr = [1, 2, 3, 4, 5]
console.log(Math.max.apply(null, arr))

console.log(Array.prototype.slice.apply({0: 1, 1: 2, 2: 3}));
console.log(Array.prototype.slice.apply({0: 1, 1: 2, 2: 3, length: 3}));

// bind 绑定 this 指向 返回一个新的函数
var d = new Date()
console.log(d)
console.log(d.getTime())

var fn = d.getTime
fn()
// 上面的调用方式 使得this指向了全局对象 而非Date 实例对象
// 下面使用 bind来进行绑定
var fn = d.getTime.bind(d)
fn()

var counter = {
    count: 0,
    add() {
        this.count++
    }
}
var fn = counter.add.bind(counter)
console.log(fn())