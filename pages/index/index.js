//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    titleBarHeight: app.globalData.titleBarHeight,
    /* home page config */
    dailyWords: "你从来不是一座孤岛",
    backgroundImage: "https://s1.ax1x.com/2020/10/12/0RqHvF.jpg",
    userLogo: "https://img.ecartelera.com/noticias/42300/42348-m.jpg"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * redirect to tests select page when click start test button
   * @param e 
   */
  handleTestsClick: function (e) {
    wx.navigateTo({
      url: '/pages/tests/index'
    });
  },

  handleLogoClick: function () {
    wx.navigateTo({
      url: "/pages/account/index",
    });
  },

  handleLoginClick: function () {
    wx.navigateTo({
      url: "/pages/login/index",
    });
  }
})