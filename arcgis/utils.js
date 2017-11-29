const e = sel => document.querySelector(sel)

const es = sel => document.querySelectorAll(sel)

const appendHtml = (element, temp, position="beforeend") {
    element.insertAdjacentHTML(position, temp)
}


// TODO
// 把点换成图片显示出来
// 处理掉卫星模型
// fix 位置的关系

var cutArray = function (arr) {
    var res = []
    for (let i  of arr) {
        if(!Array.isArray(i)) {
            res.push(i)
        } else {
            res.concat(cutArray(i))
        }
    }
    return res
}

var sumTree = function (arr) {
    var res = 0
    for (let i  of arr) {
        if(!Array.isArray(i)) {
            res += i
        } else {
             res += sumTree(i)
        }
    }
    return res
}
//
/*
1, Graphic 可以显示出位置来,
    graphic 是根据坐标来画图形的.
    需要换取鼠标位置的实时 经纬度 就可以画了,
*/


/*
我的想法:


1. 甲方现在用的生成标签的设备情况 ?
    目前的设备能不能满足编码的需求.

2. 系统运行的平台 ?
    如: 甲方采购计划采购哪些设备(扫码器, 电脑, 等...), 硬件设备平台情况确定了才能做软件开发的计划

3. 需要做一个 数据管理系统(加上编码系统), 一个PC软件或者网页, 展示库存现状和特殊的出入库处理. 以及关联到扫码设备.
    1)


*/
require(["esri/geometry/ScreenPoint"], function(ScreenPoint) {
  var point = new ScreenPoint;
  window.addEventListener('mousemove', (event) => {
    event.offsetX = point.x;
    event.offsetY = point.y;
    console.log(point);
  })
});


view.on('hold', function(event) {
  console.log('lat, lon',event.mapPoint.latitude, event.mapPoint.longitude)
})
var disableDrag = view.on("drag", function(evt) {
  // prevents panning with the mouse drag event
  evt.stopPropagation();
});

view.on('pointer-move', ["Shift"], function(evt){
  var point = Map.view.toMap({x: evt.x, y: evt.y});
  bufferPoint(point);
});
view.on('pointer-down', function(event) {
  var downPoint = Map.view.toMap({x: evt.x, y: evt.y});
  // console.log('downPoint:' downPoint)

});
view.on('pointer-up', function(event) {
  var upPoint = Map.view.toMap({x: evt.x, y: evt.y});
  // console.log('upPoint:' upPoint)
});
view.on('pointer-move', function(event) {
  console.log(event)
})

#!/bin/bash
base_path =  $1
final_path = base_path + '/final.sh'
echo final_path
