App({
  globalData: {},
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 读取本地存储的token
    const token = wx.getStorageSync('token')
    if(token && token.length !== 0) { // 表示存在token
      // 验证token是否过期 
      this.check_login(token)
    } else {  // token 不存在
      // 进行登录操作
      this.login()
    }
  },
  // 登录
  login() {
    wx.login({
      // 登录成功就可以获取到 微信返回给我们的 code
      success: ({code}) => {
        // 请求登录接口
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success: ({data}) => {
            // 获取服务器返回的 token
            const {token} = data
            // 将token保存到全局data当中
            this.globalData.token = token
            // 在将token存入本地存储当中
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  },
  // 验证登录
  check_login(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header: {
        token
      },
      success: res => {
        if(!res.data.errCode) {
          // token 有效
          this.globalData.token = token
        } else {
          // token 无效，重新登录
          this.login()
        }
      },
      fail: err => {
        console.log(err);
      }
    })
  }
})
