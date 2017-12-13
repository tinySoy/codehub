## tcp
### 简单说，TCP 协议的作用是，保证数据通信的完整性和可靠性，防止丢包。
### IP 数据包在以太网数据包里面，TCP 数据包在 IP 数据包里面。
- 第一个包的编号是一个随机数。为了便于理解，这里就把它称为1号包。假定这个包的负载长度是100字节，那么可以推算出下一个包的编号应该是101。这就是说，每个数据包都可以得到两个编号：自身的编号，以及下一个包的编号。接收方由此知道，应该按照什么顺序将它们还原成原始文件。
### http://www.ruanyifeng.com/blog/2017/06/tcp-protocol.html


### 文件上传 和图片预览
```JavaScript
　　// 检查是否支持FormData
　　if(window.FormData) {　
　　　　var formData = new FormData();
　　　　// 建立一个upload表单项，值为上传的文件
　　　　formData.append('upload', document.getElementById('upload').files[0]);
　　　　var xhr = new XMLHttpRequest();
　　　　xhr.open('POST', $(this).attr('action'));
　　　　// 定义上传完成后的回调函数
　　　　xhr.onload = function () {
　　　　　　if (xhr.status === 200) {
　　　　　　　　console.log('上传成功');
　　　　　　} else {
　　　　　　　　console.log('出错了');
　　　　　　}
　　　　};
　　　　xhr.send(formData);
　　}
    // XMLHttpRequest第二版还定义了一个progress事件，可以用来制作进度条。
    // 首先，在页面中放置一个HTML元素progress。
    <progress id="uploadprogress" min="0" max="100" value="0">0</progress>
    xhr.upload.onprogress = function (event) {
　　　　if (event.lengthComputable) {
　　　　　　var complete = (event.loaded / event.total * 100 | 0);
　　　　　　var progress = document.getElementById('uploadprogress');
　　　　　　progress.value = progress.innerHTML = complete;
　　　　}
　　};
    // 利用File API，可以做一个图片文件的预览。主要用到FileReader对象。
    // 检查是否支持FileReader对象
　　if (typeof FileReader != 'undefined') {
　　　　var acceptedTypes = {
　　　　　　'image/png': true,
　　　　　　'image/jpeg': true,
　　　　　　'image/gif': true
　　　　};
　　　　if (acceptedTypes[document.getElementById('upload').files[0].type] === true) {
　　　　　　var reader = new FileReader();
　　　　　　reader.onload = function (event) {
　　　　　　　　var image = new Image();
　　　　　　　　image.src = event.target.result;
　　　　　　　　image.width = 100;
　　　　　　　　document.body.appendChild(image);
　　　　　　};
　　　　reader.readAsDataURL(document.getElementById('upload').files[0]);
　　　　}
　　}

```

### 拖拽上传
```JavaScript
/*
html and css
<div id="holder"></div>
　　#holder {
　　　　border: 10px dashed #ccc;
　　　　width: 300px;
　　　　min-height: 300px;
　　　　margin: 20px auto;
　　}
　　#holder.hover {
　　　　border: 10px dashed #0c0;
　　}
*/
// js
　　// 检查浏览器是否支持拖放上传。
　　if('draggable' in document.createElement('span')){
　　　　var holder = document.getElementById('holder');
　　　　holder.ondragover = function () { this.className = 'hover'; return false; };
　　　　holder.ondragend = function () { this.className = ''; return false; };
　　　　holder.ondrop = function (event) {
　　　　　　event.preventDefault();
　　　　　　this.className = '';
　　　　　　var files = event.dataTransfer.files;
　　　　　　// do something with files
　　　　};
　　}
```

## AJAX (XMLHttpRequest)
### http://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html
```JavaScript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'example.php');
xhr.send();
xhr.onreadystatechange = function(){
　　if ( xhr.readyState == 4 && xhr.status == 200 ) {
　　　　alert( xhr.responseText );
　　} else {
　　　　alert( xhr.statusText );
　　}
};
/*
　　* xhr.readyState：XMLHttpRequest对象的状态，等于4表示数据已经接收完毕。
　　* xhr.status：服务器返回的状态码，等于200表示一切正常。
　　* xhr.responseText：服务器返回的文本数据
　　* xhr.responseXML：服务器返回的XML格式的数据
　　* xhr.statusText：服务器返回的状态文本。
*/
```

```JavaScript
// HTTP请求的时限
xhr.timeout = 3000;
xhr.ontimeout = function(event){
　　alert('请求超时！');
}
// FormData Object
var formData = new FormData();
formData.append('username', '张三');
formData.append('id', 123456);
xhr.send(formData);
//FormData对象也可以用来获取网页表单的值。
var form = document.getElementById('myform');
var formData = new FormData(form);
formData.append('secret', '123456'); // 添加一个表单项
xhr.open('POST', form.action);
xhr.send(formData);
```

### update file
```JavaScript
// 假定files是一个"选择文件"的表单元素（input[type="file"]），我们将它装入FormData对象。
　　var formData = new FormData();
　　for (var i = 0; i < files.length;i++) {
　　　　formData.append('files[]', files[i]);
　　}
```

### ajax

```JavaScript
　　function request(type, url, opts, callback) {
　　　　var xhr = new XMLHttpRequest();
　　　　if (typeof opts === 'function') {
　　　　　　callback = opts;
　　　　　　opts = null;
　　　　}
　　　　xhr.open(type, url);
　　　　var fd = new FormData();
　　　　if (type === 'POST' && opts) {
　　　　　　for (var key in opts) {
　　　　　　　　fd.append(key, JSON.stringify(opts[key]));
　　　　　　}
　　　　}
　　　　xhr.onload = function () {
　　　　　　callback(JSON.parse(xhr.response));
　　　　};
　　　　xhr.send(opts ? fd : null);
　　}
    //然后，基于request函数，模拟jQuery的get和post方法。
　　var get = request.bind(this, 'GET');
　　var post = request.bind(this, 'POST');    
```
### tools
```JavaScript
// 比typeof运算符更准确的类型判断函数
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"
// 在上面这个type函数的基础上，还可以加上专门判断某种类型数据的方法。
['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true
```
### Array
``` JavaScript
// 如果参数是一个正整数，返回数组的成员都是空位。虽然读取的时候返回undefined，
// 但实际上该位置没有任何值。虽然可以取到length属性，但是取不到键名。
var arr = new Array(3);
arr.length // 3

arr[0] // undefined
arr[1] // undefined
arr[2] // undefined

0 in arr // false
1 in arr // false
2 in arr // false
// Array构造函数有一个很大的问题，就是不同的参数，会导致它的行为不一致。
// 无参数时，返回一个空数组
new Array() // []

// 单个正整数参数，表示返回的新数组的长度
new Array(1) // [ undefined ]
new Array(2) // [ undefined x 2 ]

// 非正整数的数值作为参数，会报错
new Array(3.2) // RangeError: Invalid array length
new Array(-3) // RangeError: Invalid array length

// 单个非正整数参数（比如字符串、布尔值、对象等），
// 则该参数是返回的新数组的成员
new Array('abc') // ['abc']
new Array([1]) // [Array[1]]

// 多参数时，所有参数都是返回的新数组的成员
new Array(1, 2) // [1, 2]
new Array('a', 'b', 'c') // ['a', 'b', 'c']
// bad
var arr = new Array(1, 2);

// good
var arr = [1, 2];
// 用 push 合并两个数组
var a = [1, 2, 3];
var b = [4, 5, 6];

Array.prototype.push.apply(a, b)
// 或者
a.push.apply(a, b)

// 上面两种写法等同于
a.push(4, 5, 6)

a // [1, 2, 3, 4, 5, 6]

// push方法还可以用于向对象添加元素，添加后的对象变成类似数组的对象，即新加入元素的键对应数组的索引，并且对象有一个length属性。
var a = {a: 1};

[].push.call(a, 2);
a // {a:1, 0:2, length: 1}

[].push.call(a, [3]);
a // {a:1, 0:2, 1:[3], length: 2}

// slice方法的一个重要应用，是将类似数组的对象转为真正的数组。
Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']

Array.prototype.slice.call(document.querySelectorAll("div"));
Array.prototype.slice.call(arguments);

// splice方法用于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。
// splice的第一个参数是删除的起始位置，第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。
// 格式
arr.splice(index, count_to_remove, addElement1, addElement2, ...);

// 用法
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2) // ["e", "f"]
a // ["a", "b", "c", "d"]
// sort
[10111, 1101, 111].sort(function (a, b) {
  return a - b;
})
// [111, 1101, 10111]

[
  { name: "张三", age: 30 },
  { name: "李四", age: 24 },
  { name: "王五", age: 28  }
].sort(function (o1, o2) {
  return o1.age - o2.age;
})
 // 由于reduce方法依次处理每个元素，所以实际上还可以用它来搜索某个元素。比如，下面代码是找出长度最长的数组元素
 function findLongest(entries) {
  return entries.reduce(function (longest, entry) {
    return entry.length > longest.length ? entry : longest;
  }, '');
}

findLongest(['aaa', 'bb', 'c']) // "aaa"


```

### 语法
```JavaScript
// 严格地说，var a = 1 与 a = 1，这两条语句的效果不完全一样，主要体现在delete命令无法删除前者。
// 不过，绝大多数情况下，这种差异是可以忽略的。
```


