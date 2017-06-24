//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    defaultSize: 100,
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    images: [
      '../../imgs/5.jpg',
      '../../imgs/6.jpg',
      '../../imgs/7.jpg',
    ],
    caseList: [
      {
        img: "../../imgs/3.jpg",
        name: "婷小姐无硅油洗发水正品去屑止痒控油防脱洗护套装",
        id: "1",
      },
      {
        img: "../../imgs/2.jpg",
        name: "我们那个共同的理想",
        id: "2"
      },
      {
        img: "../../imgs/3.jpg",
        name: "感谢清新的空气",
        id: "3"
      },
      {
        img: "../../imgs/4.jpg",
        name: "我们那个共同的理想",
        id: "4"
      },
      {
        img: "../../imgs/5.jpg",
        name: "愚蠢的小布布",
        id: "3"
      },
      {
        img: "../../imgs/6.jpg",
        name: "木偶蠢蠢",
        id: "4"
      }
    ]
  },

  //事件处理函数
  bindViewTemplate: function(e) {
    wx.navigateTo({
      url: '../ps_template/index?type=' + e.currentTarget.dataset.id
    })
  },
  bindViewDetail: function(e) {
    wx.navigateTo({
      url: '../ps_give/index?type=' + e.currentTarget.dataset.id
    })
  },
  bindViewBuy: function(){
    wx.requestPayment({
       'timeStamp': '',
       'nonceStr': '',
       'package': '',
       'signType': 'MD5',
       'paySign': '',
       'success':function(res){
       },
       'fail':function(res){
       }
    })
  },
  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })

  },
  go: function(event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  }
})
