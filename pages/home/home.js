import request from '../../service/request.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1. 通过 原生 的方式来发送网络请求
    this.get_data()

    // 2. 通过 自己封装的 request 函数来进行网络请求
    // 目的：降低代码冗余，降低与 wx.request 函数的耦合度
    request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        name: 'ls',
        age: 18
      }
    }).then(res => {
      console.log(res);
    })
  },
  get_data() {
    // 1. 发送最基本的 get 请求
    // wx.request({
    //   url: 'http://httpbin.org/get',
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })

    // 2. 发送 get 请求 ，并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/get',
    //   get 请求携带参数可以放在 data 当中   也可以拼接在路径后面
    //   data: {
    //     name: 'zs',
    //     age: 18
    //   },
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })

    // 3. 发送 post 请求， 并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'POST', // 指定请求类型， 默认为 get 请求
    //   // post 携带参数必须放在 data 当中
    //   data: {
    //     name: 'ls',
    //     age: 20
    //   },
    //   // 请求成功的回调
    //   success: function (res) {
    //     console.log(res);
    //   },
    //   // 请求失败的回调
    //   fail: function (err) {
    //     console.log(err);
    //   },
    //   // 请求成功和失败都会执行的回调
    //   complete: function (res) {
    //     console.log(res);
    //   }
    // })
  }
})