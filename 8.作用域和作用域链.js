function test1() {
    let i = 10
}
test1()
console.log(i) // 报错

function test() {
    i = 10 // 没有声明的变量会成为一个全局变量
}
test()
console.log(i) // 107