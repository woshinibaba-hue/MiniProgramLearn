App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // 可能在 小程序初始化完成之后做的事情

    // 1. 发送网络请求
    console.log('小程序初始化完成');
    // 2.  获取用户信息   方式 一   异步操作   不推荐使用
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })

    // 3. 判断小程序进入场景   根据获取的场景值来进行不同的操作
    console.log(options.scene);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('小程序显示');

    // setTimeout(function() {
    //   throw Error('错误')
    // }, 1000)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('小程序隐藏');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序发生错误');
  },
  // 还可以在 App.js 中定义一些全局 data  这里的数据在全局都是可以直接访问的
  globalData: {
    name: 'ls',
    age: 18
  }
})