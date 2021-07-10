// pages/category/category.js
Page({
  // -------------2. 初始化页面数据 -----------------
  data: {
    message: '哈哈哈'
  },

  // -------------1. 监听页面生命周期函数 -----------------
  // 页面加载时执行   只会执行一次
  onLoad() {
    console.log('页面加载  onLoad');
    // 发送网络请求
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/home/multidata',
      success: res => {
        console.log(res);
      }
    })
  },
  // 页面显示执行
  onShow() {
    console.log('页面显示  onShow');
  },
  // 页面隐藏执行
  onHide() {
    console.log('页面隐藏  onHide');
  },
  // 页面初次渲染完成执行   只会执行一次
  onReady() {
    console.log('页面初次渲染完成  onReady');
  },
  // 页面卸载时执行
  onUnload() {
    console.log('页面卸载  onUnload');
  },

  // -------------3. 监听页面的一些事件 -----------------

  // -------------4. 其他函数 -----------------
  // 监听用户下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新');
  },
  // 监听上拉触底
  onReachBottom() {
    console.log('触底了');
  },
  // 监听页面滚动  会接受一个参数，就是滚动的距离  对象类型
  onPageScroll(scrollTop) {
    console.log(scrollTop.scrollTop);
  }
})