//  通过 调用 getApp 可以获取到 appjs  当中定义的所有属性，包括生命周期函数
const {
  globalData
} = getApp()
console.log(globalData.name);
console.log(globalData.age);

Page({
  data: {
    message: 'word',
    students: [{
        id: 110,
        name: 'zs',
        age: 19
      },
      {
        id: 111,
        name: 'ls',
        age: 16
      }, {
        id: 112,
        name: 'ww',
        age: 20
      }
    ],
    count: 0
  },
  add() {
    // 错误写法  -- 无法更新视图
    // this.data.count+=1

    this.setData({
      count: this.data.count + 1
    })
  },
  sub() {
    this.setData({
      count: this.data.count - 1
    })
  },
  // 获取用户信息
  getUserInfo(e) {
    console.log(e.detail.userInfo);
  }
})