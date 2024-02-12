// 1. js是动态语言 变量可以是任意类型
var i = 1
i = "xiejie"
console.log(i)

// 2. 在js中存在数据类型的转换
var result = '4' - '3'
console.log(result, typeof result)

// 3. 强制转换

// 3-1 Number() 可以将任意类型的值都转为number类型
//  (1) 简单值
console.log(Number('')) // 0
console.log(Number(' ')) // 0
console.log(Number('123'))
console.log(Number('niuma')) // NaN NaN也是number类型
console.log(Number('123niuma')) // NaN
// Number() 和 parseInt 就不一样
// parseInt 是会尽可能的去多转换
console.log('parseInt', parseInt('123niuma')) // 123

console.log(Number(true)) // 1
console.log(Number(false)) // 0

console.log(Number(undefined)) // NaN
console.log('parseInt', parseInt(undefined)) // NaN
console.log(Number(null)) // 0

//  (2) 对象的情况
// 第一步 valueOf 能得到简单值 调用Number() 如果是对象进入第二部步
// 第二步 toString 能得到简单值 调用Number() 如果仍然是对象 进行第三步
// 第三步 如果还是对象 就报错

// valueOf 和 toString 方法是任何对象或者值都有的 因为这两个方法是挂在Object.prototype下面的
var obj = {
    name: 'niuma'
}
console.log(obj.valueOf())
console.log(obj.toString())

// 1. valueOf ---> { name: 'niuma' }
// 2. toString ---> [object Object] ---> Number('[object Object]') ---> NaN
console.log(Number(obj.toString()))

var arr = [1, 2, 3]
console.log(arr.valueOf())
console.log(arr.toString())
console.log(Number(arr))

var arr2 = [5]
console.log(arr2.valueOf())
console.log(arr2.toString())
console.log(Number(arr2.toString()))

console.log(Number({
    valueOf: function() {
        return 2
    }
}))

var obj1 = {
    toString: function () {
        return 5
    }
}
console.log(Number(obj1.valueOf())) // 5
console.log(Number(obj1.toString())) // 5

// 报错
// console.log(Number({
//     toString: function() {
//         return {}
//     },
//     valueOf: function() {
//         return {}
//     }
// }))

// 3-2 String() 转换对象

// 1. toString() ---> 原始类型值 ---> String()
// 2. valueOf() ---> 原始类型的值 ---> String()
// 3. 报错

var obj2 = {a : 1}
console.log(obj2.toString())
console.log(obj2.valueOf())
console.log(String(obj))

var obj3 = {
    a: 1,
    toString() {
        return "this is a test"
    }
}
console.log(String(obj3))


// 3-3 Boolean
// 全是false
console.log(Boolean(''))
console.log(Boolean(""))
console.log(Boolean(``))

// 上面介绍的是强制转换 也就是我们开发人员手动转换
// 接下来要介绍的是自动转换 程序内部自动发生

// 这里就等价于Boolean('abc')
if ('abc') {
    console.log('Hello')
}

// 快速转换为布尔值
console.log(!!'abc')

// 字符串的转换
console.log('5' + {}) // 5[object Object]
// 这里在做字符串的加法 那就编程了字符串的拼接
// 右边不是字符串 那么就需要调用String()强制转换为字符串

// 首先这里是进行惩罚操作 两边都要转换为number类型
// 左5 右0
console.log('5' * []) // 0
console.log([].valueOf()) // 仍然是一个数组
console.log([].toString()) // 空字符串
console.log(Number([].toString())) // 转为0

console.log('5' * [2]) // 10
// 右边: [2].valueOf()
console.log([2].valueOf()) // [2]
console.log([2].toString()) // '2'

console.log("5" * [1, 2]) // NaN
console.log([1, 2].valueOf()) // [1, 2]
console.log([1, 2].toString()) // '1, 2'

// 一元运算符也能进行转换
console.log(+ 'abc') // NaN