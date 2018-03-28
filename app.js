//app.js
App({
  onLaunch: function () {
    console.log('小程序启动的时候触发')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    keyboard:[
      {type:'num',value:'9'},
      { type: 'num', value: '8' },
      { type: 'num', value: '7' },
      { type: 'today', value: '今天' },
      { type: 'num', value: '6' },
      { type: 'num', value: '5' },
      { type: 'num', value: '4' },
      { type: 'plus', value: '+' },
      { type: 'num', value: '3' },
      { type: 'num', value: '2' },
      { type: 'num', value: '1' },
      { type: 'less', value: '-' },
      { type: 'num', value: '.' },
      { type: 'num', value: '0' },
      { type: 'delete', value: '删除' },
      { type: 'complete', value: '完成' } 
    ]
  }
})