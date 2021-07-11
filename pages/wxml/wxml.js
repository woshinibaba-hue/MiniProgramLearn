// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 10,
    isActive: false,
    score: 80,
    list: [{
        id: 1,
        name: '哈哈哈'
      },
      {
        id: 2,
        name: '嗯嗯嗯'
      },
      {
        id: 3,
        name: '呵呵呵'
      },
    ]
  },
  toggleColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})