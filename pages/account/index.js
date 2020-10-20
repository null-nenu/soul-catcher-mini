// pages/account/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    titleBarHeight: app.globalData.titleBarHeight,
    userInfo: app.globalData.userInfo
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
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

  handleLogoutClick: function () {
    wx.showModal({
      title: "退出登录",
      content: "请问退出登录吗？登出后无法记录测试。",
      confirmText: "退出登录",
      cancelText: "再想想",
      cancelColor: 'cancelColor',
      success: (res) => {
        if (res.confirm) {
          wx.redirectTo({
            url: "/pages/index/index",
          });
        } else if (res.cancel) {

        }
      }
    })

  }
})