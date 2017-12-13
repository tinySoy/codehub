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
