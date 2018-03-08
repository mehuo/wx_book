Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'1',
    expend_icons:[
      { id: 1, text: '餐饮', icon: '../image/icons/1.png' },
      { id: 2, text: '购物', icon: '../image/icons/2.png' },
      { id: 3, text: '打车', icon: '../image/icons/3.png' },
      { id: 4, text: '午餐', icon: '../image/icons/4.png' },
      { id: 5, text: '晚餐', icon: '../image/icons/5.png' },
      { id: 6, text: '衣服', icon: '../image/icons/6.png' },
      { id: 7, text: '鞋', icon: '../image/icons/7.png' },
      { id: 8, text: '包包', icon: '../image/icons/8.png' },
      { id: 9, text: '随份子', icon: '../image/icons/9.png' },
      { id: 10, text: '贷款', icon: '../image/icons/10.png' },      
    ],
    income_icons:[
      { id: 1, text: '工资', icon: '../image/icons/1.png' },
      { id: 2, text: '红包', icon: '../image/icons/2.png' },
      { id: 3, text: '外快', icon: '../image/icons/3.png' },
      { id: 4, text: '奖金', icon: '../image/icons/4.png' },
      { id: 5, text: '晚餐', icon: '../image/icons/5.png' },
      { id: 6, text: '晚餐', icon: '../image/icons/5.png' },
    ],
    record_info:{
      cate_text :'',
      value:'',
      type:''
    }
  },
  changeType:function(event){
    var that = this;
    if (event.currentTarget.dataset.type){
      this.setData({
        type: event.currentTarget.dataset.type,
      })
      if(this.data.type == 1){
        this.setData({ icons: this.data.expend_icons})
      }else{
        this.setData({ icons: this.data.income_icons })        
      }
    }
  },
  setCate:function(event){
    var that = this;
    if (event.currentTarget.dataset.cate){
      var cate = event.currentTarget.dataset.cate;
      this.setData({
        ['record_info.cate_text']: cate.text,
        ['record_info.cate_icon']: cate.icon
        
      })
    }
    console.log(this.data) 
  },

  newCate:function(){
    var that = this;
    if(this.data.type == 1){
      wx.navigateTo({
        url: '../cateout/cateout'
      })
    }else{
      wx.navigateTo({
        url: '../catein/catein'
      })
    }
  },
  
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      icons:this.data.expend_icons,
      ['record_info.cate_text']: this.data.expend_icons[0].text,
      ['record_info.cate_icon']: this.data.expend_icons[0].icon
      
    })
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