// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    name: '',
    arr: ['流行', '时尚', '热销'],
    acriveTitle: '流行'
  },
  // 处理自定义组件发射的事件函数
  increase(e) {
    console.log(e);
    this.setData({
      count: this.data.count + 1,
      name: e.detail.name
    })
  },
  toggle(e) {
    this.setData({
      acriveTitle: this.data.arr[e.detail.index]
    })
  },
  // 更改组件数据
  changeCpnData() {
    // 1. 获取组件对象  通过给 使用组件的标签绑定上  class / id 
    // 调用 selectComponent 函数 传入 类名 或者 id 即可获取到组件实例
    const sel = this.selectComponent('#sel-id')
    console.log(sel);
    // 2. 通过调用组件实例的方法来修改组件内部的数据  (不推荐)
    // sel.setData({
    //   count: sel.data.count + 10
    // })

    // 3. 最佳方式在组件内部定义方法，然后在此处调用组件内部的方法来修改是最合适的
    sel.add(20)
  }
})