// pages/story/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    titleBarHeight: app.globalData.titleBarHeight,
    storys: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.fetchStorys();
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

  /** fetch storys */
  fetchStorys: function () {
    wx.showLoading({
      title: '加载中...',
    });

    wx.request({
      url: app.globalData.host + '/api/story/',
      success: (res) => {
        wx.hideLoading();
        this.setData({
          storys: res.data
        });
      },
      fail: (res) => {
        wx.hideLoading();
        wx.showToast({
          title: '加载失败, 请重试...',
          icon: 'none'
        });
        wx.navigateBack({
          delta: 0,
        });
      }
    })
  }
})