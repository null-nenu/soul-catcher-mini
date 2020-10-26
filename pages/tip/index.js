// pages/tip/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    titleBarHeight: app.globalData.titleBarHeight,
    id: 0,
    evaluation: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData(options.id);
    this.fetchEvaluation(options.id);
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
    wx.redirectTo({
      url: '/pages/tests/index',
    })
  },

  fetchEvaluation: function (id) {
    wx.showLoading({
      title: '加载量表中...',
    });
    wx.request({
      url: app.globalData.host + '/api/evaluation/' + id + '/',
      success: (res) => {
        wx.hideLoading({});
        this.setData({
          evaluation: res.data
        });
      }
    });
  }
})