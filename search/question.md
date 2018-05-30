```
// 1.js 中函数传值的方式
var funcA = function(age) {
    age = 233
}

var funcb = function(info) {
    info.age = 233
}

var mage = 23
var minfo = {age:23}



// 2.啥事跨域, 为啥会跨域, 解决方案, 跨域怎么发 post 请求


// 3, 深拷贝和浅拷贝


// 4. undefined  null 

// null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始
// 转为数值时为NaN。
```


# 数组
```
数组的某个位置是空位，与某个位置是undefined，是不一样的。如果是空位，使用数组的forEach方法、for...in结构、以及Object.keys方法进行遍历，空位都会被跳过。

var a = [, , ,];

a.forEach(function (x, i) {
  console.log(i + '. ' + x);
})
// 不产生任何输出

for (var i in a) {
  console.log(i);
}
// 不产生任何输出

Object.keys(a)
// []
```