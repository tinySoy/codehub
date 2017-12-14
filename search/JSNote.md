### 包装对象
``` JavaScript
// Number、String和Boolean如果不作为构造函数调用（即调用时不加new），常常用于将任意类型的值转为数值、字符串和布尔值。
// 这三个对象作为构造函数使用（带有new）时，可以将原始类型的值转为对象；
// 作为普通函数使用时（不带有new），可以将任意类型的值，转为原始类型的值。
var str = 'abc';
str.length // 3

// 等同于
var strObj = new String(str)
// String {
//   0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"
// }
strObj.length // 3
//上面代码中，字符串abc的包装对象有每个位置的值、有length属性、还有一个内部属性[[PrimitiveValue]]保存字符串的原始值。
// 这个[[PrimitiveValue]]内部属性，外部是无法调用，仅供ValueOf或toString这样的方法内部调用。
//这个临时对象是只读的，无法修改。所以，字符串无法添加新属性。
```
### Boolean
``` JavaScript
// false对应的包装对象实例，布尔运算结果也是true。
if (new Boolean(false)) {
  console.log('true');
} // true

if (new Boolean(false).valueOf()) {
  console.log('true');
} // 无输出
// Boolean对象除了可以作为构造函数，还可以单独使用，将任意值转为布尔值。这时Boolean就是一个单纯的工具方法。
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false

Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true

// 使用双重的否运算符（!）也可以将任意值转为对应的布尔值。
!!undefined // false
!!null // false
!!0 // false
!!'' // false
!!NaN // false
!!1 // true
!!'false' // true
!![] // true
!!{} // true
!!function(){} // true
!!/foo/ // true

// 对于一些特殊值，Boolean对象前面加不加new，会得到完全相反的结果，必须小心。

if (Boolean(false)) {
  console.log('true');
} // 无输出

if (new Boolean(false)) {
  console.log('true');
} // true

if (Boolean(null)) {
  console.log('true');
} // 无输出

if (new Boolean(null)) {
  console.log('true');
} // true

```
### Number对象
```JavaScript
// Number对象作为构造函数使用，返回一个值为1的对象。
var n = new Number(1);
typeof n // "object"
// 作为工具函数时，它可以将任何类型的值转为数值。
Number(true) // 1
// 
// Number对象拥有以下一些属性。
Number.POSITIVE_INFINITY // Infinity
Number.NEGATIVE_INFINITY // -Infinity
Number.NaN // NaN

Number.MAX_VALUE
// 1.7976931348623157e+308
Number.MAX_VALUE < Infinity
// true

Number.MIN_VALUE
// 5e-324
Number.MIN_VALUE > 0
// true

Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_SAFE_INTEGER // -9007199254740991
//
// Number对象部署了自己的toString方法，用来将一个数值转为字符串形式。

(10).toString() // "10"
// toString方法可以接受一个参数，表示输出的进制。如果省略这个参数，
// 默认将数值先转为十进制，再输出字符串；否则，就根据参数指定的进制，将一个数字转化成某个进制的字符串。
(10).toString(2) // "1010"
(10).toString(8) // "12"
(10).toString(16) // "a"
// 上面代码中，之所以要把10放在括号里，是为了表明10是一个单独的数值，
// 后面的点表示调用对象属性。如果不加括号，这个点会被JavaScript引擎解释成小数点，从而报错。

10.toString(2)
// SyntaxError: Unexpected token ILLEGAL
// 只要能够让JavaScript引擎不混淆小数点和对象的点运算符，
// 各种写法都能用。除了为10加上括号，还可以在10后面加两个点，
// JavaScript会把第一个点理解成小数点（即10.0），把第二个点理解成调用对象属性，从而得到正确结果。

10..toString(2)
// "1010"

// 其他方法还包括
10 .toString(2) // "1010"
10.0.toString(2) // "1010"
// 这实际上意味着，可以直接对一个小数使用toString方法。
10.5.toString() // "10.5"
10.5.toString(2) // "1010.1"
10.5.toString(8) // "12.4"
10.5.toString(16) // "a.8"

//通过方括号运算符也可以调用toString方法。
10['toString'](2) // "1010"
// 将其他进制的数，转回十进制，需要使用parseInt方法。
//
//toFixed方法用于将一个数转为指定位数的小数，返回这个小数对应的字符串。
(10).toFixed(2) // "10.00"
10.005.toFixed(2) // "10.01"

```


### Console 对象
```JavaScript
// console对象的所有方法，都可以被覆盖。因此，可以按照自己的需要，定义console.log方法。
['log', 'info', 'warn', 'error'].forEach(function(method) {
  console[method] = console[method].bind(
    console,
    new Date().toISOString()
  );
});

console.log("出错了！");
// 2014-05-18T09:00.000Z 出错了！
```


### Number对象
```JavaScript
// test
```
