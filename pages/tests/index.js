// pages/tests/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    titleBarHeight: app.globalData.titleBarHeight,
    evaluations: []
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
    this.fetchEvaluation();
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

  /** handle back button click */
  handleBackClick: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    });
  },

  handleRedirectClick: function (e) {
    wx.redirectTo({
      url: "/pages/question/index",
    })
  },

  fetchEvaluation: function () {
    wx.showLoading({
      title: '加载量表中...',
    });
    wx.request({
      url: app.globalData.host + '/api/evaluation/',
      success: (res) => {
        wx.hideLoading({});
        this.setData({
          evaluations: res.data
        });
      }
    })
  }
})