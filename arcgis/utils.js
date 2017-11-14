const e = sel => document.querySelector(sel)

const es = sel => document.querySelectorAll(sel)

const appendHtml = (element, temp, position="beforeend") {
    element.insertAdjacentHTML(position, temp)
}


// TODO
// 把点换成图片显示出来
// 处理掉卫星模型
// fix 位置的关系
