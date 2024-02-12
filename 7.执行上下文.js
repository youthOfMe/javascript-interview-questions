function a() {
    var i = 10
    console.log(i)
}

a()

// 创建一个执行上下文环境
// 开始执行代码

var i = 1
console.log(i)

// 在执行上面全局代码之前 还有一个准备工作
// 创建一个全局上下文

function foo () {
    function bar () {
        return 'I am bar'
    }
    return bar()
}
foo()

const foo1 = function(i) {
    var a = "Hello"
    var b = function privateB () {}
    function c () {}
}
foo1(10)

// 生成一下foo的函数上下文环境

// 1. 创建上下文阶段
fooExecutionContext = {
    vo: {
        i: 10,
        arguments: {0: 10, length: 1},
        c: '指向c那个函数',
        a: undefined,
        b: undefined
    }
}

// 2. 执行代码
fooExecutionContext = {
    vo: {
        i: 10,
        arguments: {0: 10, length: 1},
        c: '指向c那个函数',
        a: 'Hello World',
        b: '指向b那个函数'
    }
}

var q1 = 4
console.log(q1) // 4
// function q1 () {
//     console.log(55)
// }
q1 = function () {

}
console.log(q1) // 4  function

(function () {
    console.log(typeof foo)
    console.log(typeof bar)
    var foo = "Hello"
    var bar = function () {
        return "World"
    }

    function foo() {
        return "good"
    }
    console.log(foo, typeof foo)
})()

// 在进行变量声明的时候 如果发现变量名已经存在 则不会再去声明
executionContext = {
    vo: {
        foo: '指向foo函数',
        bar: undefined
    }
}

// 2. 执行代码
// console.log(typeof foo) function
// console.log(typeof bar) undefined
// var foo = "Hello" foo => Hello
// var bar = function () {
//     return "World"
// } bar => function

// function foo() {
//     return "good"
// }
// console.log(foo, typeof foo) hello string