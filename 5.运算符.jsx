// 加法运算符
console.log(1 + 2)

// 非数值(非字符串)会被转换为数值
console.log(true + true)

// 如果右一个操作数是字符串 那么就是进行字符串的拼接
console.log('3' + 4 + 5)

// 如果是对象 会先将对象转为数值类型(Number)
// 对象转Number会先调用valueOf 再调用toString
console.log([] + 1) // '1'
console.log({} + 1)  // [Object object]

var obj = {
    name: "niuma",
    valueOf: () => {
        return 7
    }
}

console.log(obj + 1)

var d = new Date()
console.log(d + 1) // Mon Feb 12 2024 19:56:58 GMT+0800 (香港标准时间)1

// 四则运算中的 - * / 都是转成数值进行运算即可
// 如果无法转为数值 那么最终得到的就是NaN
console.log('5' - '2')
console.log('5' - true)
console.log({} - '2')

// 余数
console.log(5 % 2)

// 在做取余运算时 小数对大数取余 直接得到这个小数
console.log(3 % 100)


// 自增自减
// 需要注意的就是运算符在前和在后的区别
// 在前: 先做自增或者自减 然后再参加运算
// 在后: 先做运算 然后再自增或者自减
var i = 1
var j = i++ + 5
console.log(i)
console.log(j)

// 数值运算符
console.log(+5)
console.log(-5)

console.log(-true); // -1
console.log(-[]); // -0
console.log(-{}); // NaN
// 之所以[]转出来是0 是因为空数组在转为字符串的时候得到的是空字符串
// 空字符串转为数字就是 0
// 而{}转字符串得到的是[object Object]

// 指数运算符

console.log(Math.pow(2, 3))
console.log(2 ** 3)

// 比较运算符
console.log(5 > 3)

// 会将'3'转为数值
console.log(5 > '3');
console.log(5 > true);
console.log(5 > []);
console.log(5 > {})

// NaN在做比较的时候得到的是false
// NaN在做计算的时候得到的是NaN
console.log(5 > NaN);
console.log(5 < NaN)
console.log(5 + NaN)
console.log(5 - NaN)
console.log(5 * NaN)
console.log(5 / NaN)

// 会将'3'先转为数值
// 当遇到不是数值的操作数 会先将其转为数值
console.log(5 > '3')
console.log(5 > true)
console.log(5 > [])
console.log(5 > {})

// 如果两边都是字符串 那么这个比较规则又变化了
// 比较的是字符的编码大小

console.log('a' < 'b')
console.log('a' > 'A')
// 取出字符串的第一位去比较 如果第一位比较不出来就顺位继续比较
console.log('cat' > 'boyfriend') // true
console.log('cat' > 'cate') // false


// 严格相等
console.log(5 === '5')

// 相等运算符
console.log(5 == '5')

console.log(3 === 0b11)

// 对象进行比较的时候 比较的就不是值了
// 而是比较的地址
console.log([] === []) // 会报错不让比较

var arr = []
var arr2 = arr
console.log(arr === arr2)

// 严格不相等
console.log(5 !== '5')

// 相等运算符
console.log('123a' > 1)

console.log(5 != '5');

// 布尔运算符
console.log('---------------------------------')
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean([]))
console.log(Boolean(undefined))
console.log(Boolean(' '))

// 快速将一个值转为布尔值
console.log(!!54)
console.log(!!undefined)

// && 运算符
// 有一个为假就都为假 全部为真最终才会得到真

// 如果都会真就返回最后一个真值 如果有假值就返回第一个假值
console.log(1 && 2)

// || 运算符
// 有一个是真值 就为真 如果全部都为假最终就是假
// 如果有真值就返回第一个真值 如果都为假就返回最后一个假值
console.log(1 || 2 || 3 || 4 || 5)
console.log(null || undefined)

// 位运算符
// 按位非就是求反码减一
console.log(~5) // 非会操作符号位 其他的不会操作符号位

console.log(12 & 10)
console.log(12 | 10)
console.log(12 ^ 10)

// 等价于乘以2的3次方
console.log(2 << 3);
// 等价于除以2的4次方
console.log(16 << 4);

// void运算符
{/* <a href="void()"></a> */}

var a = {
    i: 1,
    toString() {
        return a.i++;
    }
}
// Number ---> valueOf ---> toString
if (a == 1 && a == 2 & a == 3) {
    console.log(555)
}
