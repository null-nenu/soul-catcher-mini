// pages/destroy/index.js
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

  handleDestroyClick: function () {
    wx.showModal({
      cancelColor: 'cancelColor',
      title: "删除账号",
      content: "注意: 本操作将删除账号。",
      confirmText: "确认删除",
      cancelText: "再想想",
      success(res) {
        if (res.confirm) {
          wx.redirectTo({
            url: "/pages/index/index",
          })
        } else if (res.cancel) {

        }
      }
    })
  },

  handleBackClick: function () {
    wx.navigateBack({
      delta: 0,
    });
  }
})