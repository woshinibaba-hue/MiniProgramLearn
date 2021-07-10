// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: ''
  },
  handleImgLoad() {
    console.log('图片加载完毕');
  },
  // 选择图片
  handleSelectImg() {
    // 调用  chooseImage  函数， 用于选择图片或者拍照
    wx.chooseImage({
      // 成功之后回调的函数  函数 形参 当中就是保存的就是选择的图片信息
      success: res => {
        console.log(res.tempFilePaths);
        this.setData({
          imgUrl: res.tempFilePaths
        })
      }
    })
  }
})