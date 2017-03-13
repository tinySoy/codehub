/*
    约定：
       C为Ctrl键
       W为Win键
    移动光标：
       C-f     光标右(forward)
       C-b     光标左(backward)
       C-p     光标上(previous)
       C-n     光标下(next)
       C-W-f   往右一个单词
       C-W-b   往左一个单词
       C-a     光标移动到行首
       C-e     光标移动到行尾
    删除：
       C-h     删除光标左边的一个字符
       C-d     删除光标右边的一个字符
       C-W-h   删除光标左边的一个单词
       C-W-d   删除光标右边的一个单词
       C-k     删除从当前光标到行尾的所有内容
       C-u     删除从当前光标到行首的所有内容
    重新利用被占用热键：
       W-f     C-f（搜索）
       W-n     C-n（新建）
       W-a     C-a（全选）
       W-h     C-h（chrome的历史记录）
*/
var log = function() {
    console.log.apply(console, arguments)
}

var e = function(selector) {
    return document.querySelector(selector)
}

var es = function(selector) {
    return document.querySelectorAll(selector)
}

var appendHtml = function(element, html) {
	element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}

var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for(var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// find 函数可以查找 element 的所有子元素
var find = function(element, selector) {
    return element.querySelector(selector)
}

var isFunction = function(value) {
    return Object.prototype.toString.call(value)
}

var ckXian = function() {
    var body  = document.querySelector('body')
    var style ='<style id="xm" media="screen"> * {outline: 1px red dashed!important} </style>'
    var i = false
    body.addEventListener('keydown', function(event) {
        if (event.keyCode === 77 && event.ctrlKey) {
            if (i) {
                var styletog = document.querySelector('#xm')
                styletog.remove()
                i = false
            } else {
                body.insertAdjacentHTML('afterbegin', style)
                i = true
            }
        }
    })
} // 加载代码 使用 Ctrl + M 显示参考线
