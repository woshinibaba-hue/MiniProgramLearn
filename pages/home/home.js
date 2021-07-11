Page({
  btnClick() {
    console.log(111);
  },
  btnTouchStart() {
    console.log('手指开始触摸  btnTouchStart');
  },
  bindTouchEnd() {
    console.log('手指触摸结束  bindTouchEnd');
  },
  bindTouchMove() {
    console.log('手指开始移动  bindTouchMove');
  },
  bindLongPress() {
    console.log('手指触摸后超过350毫秒 不再触发 tap 事件  bindLongPress');
  },
  bindTap() {
    console.log('手指触摸后马上离开  bindTap');
  },
  // changedTouches  触摸事件，当前变化的触摸点信息的数组
  // touches  触摸事件，当前停留在屏幕中的触摸点信息的数组
  btnClick1(e) {
    console.log(e);
  },
  bindTouchEnd1(e) {
    console.log(e);
  },
  // currentTarget  当前组件的一些属性值集合
  // target  触发事件的组件的一些属性值集合
  box1(e) {
    console.log(e);
  },

  // 事件捕获和冒泡
  v1() {
    console.log('v1捕获阶段');
  },
  v1bind() {
    console.log('v1冒泡阶段');
  },
  v2() {
    console.log('v2捕获阶段');
  },
  v2bind() {
    console.log('v2冒泡阶段');
  },
  v3() {
    console.log('v3捕获阶段');
  },
  v3bind() {
    console.log('v3冒泡阶段');
  },
})