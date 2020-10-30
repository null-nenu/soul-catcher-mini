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
    backgroundImage: app.globalData.host + "/static/images/background.jpg",
    userLogo: ""
  },

  onLoad: function () {
    // callback for user information fetch
    app.userInfoReadyCallback = res => {
      this.setData({
        userInfo: res.userInfo,
      })
    };
    // run app config fetch
    this.fetchConfig();
  },

  onShow: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo.userInfo
      });
    }
  },

  getUserInfo: function (e) {
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
  },

  fetchConfig: function () {
    wx.request({
      url: app.globalData.host + "/api/setting/app_config/",
      success: (res) => {
        if (res.statusCode == 200) {
          this.setData({
            backgroundImage: res.data.background ? app.globalData.host + res.data.background : app.globalData.host + "/static/images/background.jpg",
            dailyWords: res.data.solgan ? res.data.solgan : this.data.dailyWords
          });
        } else {
          wx.showToast({
            title: '加载失败，请稍后重试...',
            icon: 'none'
          });
        }
      },
      fail: (res) => {
        wx.showToast({
          title: '网络似乎有问题，请稍后重试...',
          icon: 'none'
        });
      }
    });
  }
})