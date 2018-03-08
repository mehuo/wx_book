//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    books: ['账本1', '账本2'],
    bookIndex:0,
  },
  //事件处理函数
  bindAddRecord: function() {
    wx.navigateTo({
      url: '../record/record'
    })
  },
  onLoad: function () {
    this.setData({
      details: [
        { time: '2018-1-1', income: '100.00', expend: 20.00, cate: '餐饮', blance: 80.00 },
        { time: '2018-1-2', income: '100.00', expend: 20.00, cate: '餐饮', blance: 80.00 },
        { time: '2018-1-2', income: '200.00', expend: 100, cate: '购物', blance: 100.00 },
        { time: '2018-1-4', income: '100.00', expend: 50.00, cate: '打车', blance: 50.00 },
        { time: '2018-1-4', income: '100.00', expend: 20.00, cate: '地铁', blance: 80.00 },
      ]
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
