## 收集些题目
```JavaScript
// http://es6.ruanyifeng.com/#docs/class
// 1. class 和 prototype 有什么区别和联系
// es6 的 class 可以看做语法糖
// 区别主要是语法吧？
// class 的绝大部分功能都可以用 es5 的 prototype 实现。
// 类的方法其实就定义在 prototype 上面

// 2. class 有没有静态属性，如果没有如何实现
// 在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，

// 3. prototype 有没有静态方法，如果没有如何实现
// 答：好像没有啊。不知道怎么实现= =求解

// 或者换一个简单的，比如你说熟练掌握 prototype，那么你了解 
// object.create 这个方法吗？vue 的源码里有 object.create(null) 和 object.create({})，这两者的区别是什么
var a = Object.create(null)

// a -> {}No properties
var b  = Object.create({})
// b  -> {} __proto__: Object

```

