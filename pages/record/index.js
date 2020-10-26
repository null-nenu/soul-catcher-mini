// pages/record/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    titleBarHeight: app.globalData.titleBarHeight,
    detail: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (options.id) {
      this.fetchEvaluationRecord(options.id)
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

  /** handle back button click */
  handleBackClick: function () {
    wx.navigateBack({
      delta: 0,
    })
  },
  /** fetch evaluation record detailsF */
  fetchEvaluationRecord: function (id) {
    wx.showLoading({
      title: "获取评测结果中..."
    });

    wx.request({
      url: app.globalData.host + '/api/evaluation_record/' + id + '/details/',
      success: (res) => {
        wx.hideLoading();
        this.setData({
          detail: res.data
        })
      }
    });
  }
})