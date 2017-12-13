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
// Number对象
```

### Number对象
```JavaScript
// test
```
