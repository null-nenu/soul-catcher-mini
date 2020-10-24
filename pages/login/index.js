// pages/login/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    titleBarHeight: app.globalData.titleBarHeight
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  handleBackClick: function () {
    wx.navigateBack({
      delta: 0,
    });
  },

  handleLoginClick: function (e) {
    if (e.detail.errMsg == "getUserInfo:ok") { // success get user information
      /* try to login in service */
      wx.showToast({
        title: '登录中...',
        icon: "loading",
        mask: true
      })
      wx.login({
        success(res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: app.globalData.host + "/wechat/wechat_login/",
              method: "POST",
              data: {
                "code": res.code,
                "nickName": e.detail.userInfo.nickName,
                "gender": e.detail.userInfo.gender,
                "avatarUrl": e.detail.userInfo.avatarUrl
              },
              success(res) {
                // show a toast for sucessful login
                wx.showToast({
                  title: '登录成功',
                  icon: "success"
                });
                // set global token
                app.globalData.token = res.token;
                // set global user information
                app.globalData.userInfo = e.detail;

                wx.navigateBack({
                  delta: 0,
                });
              },
              fail(res) {
                wx.showToast({
                  title: '登录失败，请重试。' + res.msg,
                });
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    } else { // faild
      wx.showToast({
        title: '请允许获取用户信息',
        icon: 'none'
      });
    }

  },

  /**
   * login by user information
   */
  userLogin: function (userInfo) {

  }
})