Page({
  showToast() {
    // 1. 消息提示框
    wx.showToast({
      title: '你好呀',
      mask: true, // 禁止背景点击
      duration: 2000, // 弹窗展示时间
      icon: 'loading', //弹窗展示类型
      // image: '', // 自定义展示图标
      // 弹窗展示成功回调
      success: function (res) {
        console.log(res);
      },
      // 弹窗展示失败回调
      fail: function (err) {
        console.log(err);
      }
    })
  },
  // 2. 消息确认框
  showModal() {
    wx.showModal({
      title: '标题',
      content: '内容',
      confirmText: '发送',
      confirmColor: 'green',
      success(res) {
        if (res.confirm) {
          console.log('点击了确定');
        } else {
          console.log('点击了取消');
        }
      }
    })
  },
  // 3. loading 展示
  showLoading() {
    wx.showLoading({
      title: '加载中',
      mask: true, // 禁止背景点击
    })

    setTimeout(() => {
      // loading 提示框 必须调用下面函数才能关闭
      wx.hideLoading()
    }, 1500)
  },
  // 4. showActionSheet  展示菜单
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      // 可以获取到用户点击选项的索引值
      success(res) {
        console.log(res);
      }
    })
  },
  // 当用户点击右上角分享按钮触发
  onShareAppMessage() {
    // 该函数必须返回一个对象
    return {
      // 转发时的标题部分
      title: 'hello word',
      // 转发路径，必须是绝对路径
      path: '/pages/about/about',
      // 自定义分享图片
      imageUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2Fbb%2F37%2Ff5%2Fbb37f583e8da88aed385306a07361c2a.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628594884&t=653a7707388499a3ede02cea609b238a'
    }
  },
})