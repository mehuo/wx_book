Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:[
      {year:'2018',month:'3',in:10000,out:8000,balance:2000,subs:[
        {cate:'餐饮',desc:'吃饭',value:45.00},
        { cate: '购物', desc: '买鞋子', value: 200.00 },
        { cate: '娱乐', desc: '看电影', value: 145.00 } 
      ]},
      {
        year: '2018', month: '2', in: 10000, out: 11000, balance: 1000, subs: [
          { cate: '餐饮', desc: '吃饭', value: 45.00 },
          { cate: '购物', desc: '买鞋子', value: 200.00 },
          { cate: '娱乐', desc: '看电影', value: 145.00 }
        ]
      }, {
        year: '2018', month: '1', in: 10000, out: 8000, balance: 2000, subs: [
          { cate: '餐饮', desc: '吃饭', value: 45.00 },
          { cate: '购物', desc: '买鞋子', value: 200.00 },
          { cate: '娱乐', desc: '看电影', value: 145.00 }
        ]
      }
    ]
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