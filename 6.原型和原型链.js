var person = {
    arms: 2,
    legs: 2
}

// Object.create 接收第二个参数: 对象
// 该对象里面可以设置多个键值对
// 每个键就是新对象的属性 所对应的值是一个属性描述符
var zhangsan = Object.create(person, {
    name: {
        value: 'zhangsan',
        enumerable: true
    },
    age: {
        value: 18,
        enumerable: true
    }
})
// person 实际上就是zhangsan这个对象的原型对象
console.log(zhangsan)
console.log(zhangsan.arms)
console.log(zhangsan.legs)

console.log(zhangsan.__proto__ === person)

var zhangxiaosan = Object.create(zhangsan, {
    name: {
        value: "zhangxiaosan",
        enumerable: true
    },
    born: {
        value: 'beijing',
        enumerable: true
    }
})
console.log(zhangxiaosan.name)
console.log(zhangxiaosan.arms)
console.log(zhangxiaosan.gender)

// 总结 当查找一个对象的属性的时候 如果该对象上面没有这个属性 则会去该对象上面的原型对象进行查找

console.log(zhangxiaosan.__proto__ === zhangsan)
console.log(zhangxiaosan.__proto__.__proto__ === person)

// 之后随着js语言的发展 我们还是希望js能够以像标准面向对象语言一样
// 通过类来批量生产对象
// 早期js通过构造函数来模拟其他语言里面的类

function Computer(name, price) {
    this.name = name
    this.price = price
    // this.showPrice = function() {
    //     console.log(`${this.name}的电脑价格为${this.price}`)
    // }
}
Computer.prototype.showPrice = function() {
    console.log(`${this.name}的电脑价格为${this.price}`)
}
var apple = new Computer("苹果", 15000)
console.log(apple)
apple.showPrice()

var huawei = new Computer("华为", 12000)
console.log(huawei)
huawei.showPrice()

// 虽然上面的方式模拟出了其他语言中面向对象的语言创建对象的方式
// 但是在js底层还是基于原型创建的对象

// 比如我们的对象除了有属性 一般还有方法
// 方法一般会选择挂到原型对象上面

console.log(apple.__proto__ === Computer.prototype)
console.log(apple.__proto__.constructor  === Computer)


// 内置的构造函数也有这样的三角关系
var arr = []
console.log(Array.prototype === arr.__proto__);
console.log(Array.__proto__ === Computer.__proto__)
console.log(Date.__proto__ === Computer.__proto__)
console.log(String.__proto__ === Computer.__proto__)
console.log(Number.__proto__ === Computer.__proto__)
console.log(Boolean.__proto__ === Computer.__proto__)

// 验证原型对象的终点是null
console.log(apple.__proto__.__proto__.__proto__)
console.log(apple.__proto__.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

console.log(Computer.__proto__.__proto__ === Object.prototype)

// Object.prototype 再往上一层(__proto__) 就是null

console.log(Computer.__proto__ == Object.prototype.constructor.__proto__)