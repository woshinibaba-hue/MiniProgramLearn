// 封装 wx.request 网络请求函数

// const request = params => {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: params.url || '',
//       method: params.method || 'GET',
//       data: params.data || {},
//       success: function (res) {
//         resolve(res)
//       },
//       fail: function (err) {
//         reject(err)
//       }
//     })
//   })
// }

const request = params => {
  if (params.url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: params.url || '',
        method: params.method || 'GET',
        data: params.data || {},
        success: resolve,
        fail: reject
      })
    })
  } else {
    throw Error('缺少必传参数url')
  }
}
export default request