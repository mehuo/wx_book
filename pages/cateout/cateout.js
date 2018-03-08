Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'1',
    icons:[
      {icon: '../image/icons/1.png' },
      {icon: '../image/icons/2.png' },
      {icon: '../image/icons/3.png' },
      {icon: '../image/icons/4.png' },
      {icon: '../image/icons/5.png' },
      {icon: '../image/icons/6.png' },
      {icon: '../image/icons/7.png' },
      {icon: '../image/icons/8.png' },
      {icon: '../image/icons/9.png' },
      {icon: '../image/icons/10.png' },      
    ],
    cate_info:{
      cate_icon :'',
      cate_text:'',
      type:''
    }
  },
  setCate:function(event){
    var that = this;
    console.log(event.currentTarget.dataset);
    if (event.currentTarget.dataset.cate){
      var cate = event.currentTarget.dataset.cate;
      this.setData({
        ['cate_info.cate_icon']: cate.icon
      })
    }    
    console.log(this.data)  
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      ['cate_info.cate_icon']: this.data.icons[0].icon,
      ['cate_info.type']: this.data.type
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