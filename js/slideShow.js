
/*
 * 载入页面
   隐藏掉非第一张图片的其他图片
   隐藏上一张和下一张按钮
 * 上一张下一张按钮的显示和隐藏事件
 * 切换图片函数
   函数有两个参数, 切换前图片的下标 preIndex 和切换后图片的下标 currentIndex
   修改小圆点样式
 * 上一张下一张按钮的切换图片事件
   根据按钮的需求来调用不同的函数(pre, next)
   pre, next 函数会在重新定义 preIndex 和 currentIndex 后调用切换图片函数,
 * 小圆点的切换图片事件
 * 停止播放和开始播放函数

*/
var log = function() {
   console.log.apply(console, arguments)
 }

var hasStarted = false

var button = $('.slider-page')

var documentOnLoad = function() {
   // 获取图片数目
   length = $('.slider-panel').length
   // 初始化当前图片下标，
   currentIndex = 0
   // 初始化轮播状态
   hasStarted = false
   // 定义轮播间隔
   t = 2000
   // 隐藏多余图片
   $('.slider-panel:not(:first)').hide()
   // 给第一张图片对应的小圆点添加色彩
   $('.slider-item:first').addClass('slider-item-selected')
   // 隐藏上一张和下一张按钮
   $('.slider-page').hide()
}


 // 按钮的隐藏和显示事件
 var buttonEvent = function() {
     var area = $('.slider-panel, .slider-pre, .slider-next')
     // 鼠标浮动至事件区域时，显示上一张下一张按钮并暂停自动轮播
     // 鼠标移走时，隐藏向前、向后翻按钮，开始轮播
     var button = $('.slider-page')
     area.hover(function() {
         stop()
         button.show()
     }, function() {
         start()
         button.hide()
     })
 }

// 小圆点 hover 事件
var sliderItemEvent = function() {
   var sliderItem = $('.slider-item')
   // 移入时停止轮播, 获取移入前图片的下标和移入后图片的下标, 调用play函数
   // 移出时开始轮播
   sliderItem.hover(function(e) {
     stop()
     var preIndex = sliderItem.filter(".slider-item-selected").index()
     currentIndex = $(this).index()
     play(preIndex, currentIndex)
   }, function() {
       if (!hasStarted) {
           // 初始化时定义了 hasStarted = false
           // 修改 hasStarted
           hasStarted = true
           interval = setInterval(next, t)
       }
   })
}

// 上一张按钮事件
var preEvent = function() {
   var preButton = $('.slider-pre')
   preButton.bind('click', function() {
       pre()
   })
}

// 下一张按钮事件
var nextEvent = function() {
   var nextButton = $('.slider-next')
   nextButton.bind('click', function() {
       next()
   })
}

// 向前翻页事件
var pre = function() {
   var preIndex = currentIndex
   currentIndex = (--currentIndex + length) % length
   play(preIndex, currentIndex)
}

// 向后翻页事件
var next = function() {
   var preIndex = currentIndex;
   currentIndex = ++currentIndex % length;
   play(preIndex, currentIndex)
}

//play切换图片函数
var play = function(preIndex, currentIndex) {
   // 找到 pre 下标图片淡出, curr 图片淡入
   $('.slider-panel').eq(preIndex).fadeOut(500)
   $('.slider-panel').eq(currentIndex).fadeIn(900)
   var sliderItem = $('.slider-item')
   // 删除掉 pre 小圆点的红色样式
   sliderItem.removeClass('slider-item-selected')
   // 给 currentIndex 图片添加红色样式
   sliderItem.eq(currentIndex).addClass('slider-item-selected')
}

// start开始播放函数
var start = function() {
   if (!hasStarted) {
       // 初始化时定义了 hasStarted = false
       // 修改 hasStarted
       hasStarted = true
       interval = setInterval(next, 2000)
   }
}

// stop停止播放函数
var stop = function() {
   // clearInterval 方法可以取消 setInterval 设置的 timeout
   clearInterval(interval)
   // 修改hasStarted
   hasStarted = false
}

// 主函数
var main = function() {
   documentOnLoad()
   buttonEvent()
   sliderItemEvent()
   preEvent()
   nextEvent()
   start()
}
main()
