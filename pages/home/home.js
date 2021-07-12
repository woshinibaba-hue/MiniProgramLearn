// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?name=ls&age=30',
    })
  }
})