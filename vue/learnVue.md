## vue
# 父子组件通讯
```JavaScript
// 在用子组件的时候, @delete='handleFunction' (自定义delete事件?)
// 在子组件中 emit delete, 有参数加上参数
```
## 生命周期?
```JavaScript

```
## change css
```JavaScript
// class 的对象绑定 
:class='{actived: isActived}'
// isActived 的 true false 决定是否有 actived
:class='[actived, activedOne]'
// 数组里的就是变量了 修改变量就改class
```
## set 方法
```JavaScript
// 修改 array
Vue.set(arrary, index, content)
vm.$set(arrary, index, content)
// 修改 对象
Vue.set(obj, key, value)
vm.$set(obj, key, value)

```
## 父子组件的使用
```JavaScript
// 页面渲染有问题时, 写上 html 期望的属性, 是 is 指向组件
// 在子组件上写, ref, 父组件可以获取子组件的引用, dom 用 ref 获取 dom

```
