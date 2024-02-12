function a() {
    function b() {
        function c() {

        }
        c(` `)
    }
    b()
}
a()

var ob = {
    name: "niuma",
    age: 18,
    score: 100,
    newStu: {
        name: "zhangsan",
        age: 19
    }
}

// 比较方式
var a1 = 10
var b1 = 10
console.log(a1 === b1) // true

var arr1 = [1, 2, 3]
var arr2 = [1, 2, 3]
console.log(arr1 === arr2) // false

// 动态属性
var obj = {}
obj.name = "niuma"
console.log(obj.name) // niuma

var str = "Hello"
str.name = "niuma"
console.log(str.name) // undefined 简单值不能直接设置属性

/*
    不同点
        访问方式
        比较方式
        动态属性
        变量赋值
*/
