// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   * 在onLoad 生命周期函数 形参当中，就保存着跳转过来时，所携带的参数信息
   */
  onLoad: function (options) {
    console.log(options);
  },
  handleBackHome() {
    // 返回页面
    // delta  指定返回层级  默认为  1
    wx.navigateBack({
      delta: 1
    })
  },
  onUnload() {
    console.log('页面关闭');
    // getCurrentPages()   获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。
    console.log(getCurrentPages());
  }
})