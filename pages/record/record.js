var util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    keyboard : getApp().globalData.keyboard,
    type:'1',
    expend_icons:[
      { id: 1, text: '吃喝', icon: '../image/icons/out/ch'},
      { id: 2, text: '交通', icon: '../image/icons/out/jt' },
      { id: 3, text: '服饰', icon: '../image/icons/out/fs' },
      { id: 4, text: '日用品', icon: '../image/icons/out/ryp' },
      { id: 5, text: '红包', icon: '../image/icons/out/hb' },
      { id: 6, text: '买菜', icon: '../image/icons/out/mc' },
      { id: 7, text: '孩子', icon: '../image/icons/out/hz' },
      { id: 8, text: '网购', icon: '../image/icons/out/wg' },
      { id: 9, text: '话费', icon: '../image/icons/out/hf' },
      { id: 10, text: '娱乐', icon: '../image/icons/out/yule' },
      { id: 11, text: '医疗', icon: '../image/icons/out/yl' },  
      { id: 12, text: '化妆护肤', icon: '../image/icons/out/hzhf' },   
      { id: 13, text: '其他', icon: '../image/icons/out/qt' },         
    ],
    income_icons:[
      { id: 1, text: '工资', icon: '../image/icons/in/gz' },
      { id: 2, text: '兼职', icon: '../image/icons/in/jz' },
      { id: 3, text: '投资', icon: '../image/icons/in/tz' }
    ],
    record_info:{
      cate_text :'',
      value:0,
      type:''
    },
    num:'',
    numtype:'num'
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
  //设置选中的图标icon
  setCate:function(event){
    var that = this;
    console.log(event.currentTarget)
    if (event.currentTarget.dataset.cate){
      var cate = event.currentTarget.dataset.cate;
      this.setData({
        ['record_info.cate_text']: cate.text,
        ['record_info.cate_icon']: cate.icon,
        ['record_info.icon_id']: cate.id,
      })
    }
    console.log(this.data.expend_icons) 
  },
  setNum: function (event) {
    var value = event.currentTarget.dataset.value;
    console.log(value);
    var final_value = this.data.num + value+'';
    console.log(final_value)
    this.setData({
      'num': final_value ,
      'numtype':'num' 
    })
  },
  calc: function (event) {
    var calc_type = event.currentTarget.dataset.type;
    if (this.data.num != '' ){
      if (calc_type == 'plus') {
        var actual = parseFloat(this.data.record_info.value + parseFloat      (this.data.num))
      } else {
        var actual = parseFloat(this.data.record_info.value - parseFloat(this.data.num))
      }
      this.setData({
        'record_info.value': actual,
        'numtype': 'res',
        'num': ''
      })
    } 
  },
  setDate: function () {
    console.log('设置日期');
  },
  del: function () {
    if(this.data.numtype == 'num'){
      var str_len = this.data.num.length;      
      this.setData({
        num: this.data.num.substring(0, str_len-1)         
      })
    }else{
      var str_len = (this.data.record_info.value+'').length;
      this.setData({
        'record_info.value': (this.data.record_info.value+'').substring(0, str_len - 1)
      })
    }
  },
  complete: function () {
    console.log('complete')
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
      ['record_info.cate_icon']: this.data.expend_icons[0].icon,
      ['record_info.icon_id']: this.data.expend_icons[0].id,
      
      
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