var str = "Hello"
var str2 = new String("World")

var i = 1
var j = new Number(2)

var isPass = true
var isPass = new Boolean(false)

console.log(j.toFixed(2))
console.log(str.charAt(0))
console.log(1..toFixed(2)) // 打一个点以为是小数点 打两个点就知道你在调用方法
console.log((1).toFixed(2))

// 普通数据类型也可以进行调用方法
// 因为当我们使用属性和方法的时候 JS内部会自动进行一个转换
// 会自动生成一个包装对象