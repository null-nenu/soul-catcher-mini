// pages/viewer/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    id: 0,
    url: ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (options.id) {
      this.fetchStory(options.id);
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
  onShow: function () {},

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
  onShareAppMessage: function () {},

  fetchStory: function (id) {
    wx.showLoading({
      title: "加载中...",
    });

    wx.request({
      url: app.globalData.host + '/api/story/' + id + "/",
      success: (res) => {
        wx.hideLoading();
        this.setData({
          id: res.data.id,
          url: app.globalData.host + res.data.url
        });
        wx.setNavigationBarTitle({
          title: res.data.title,
        });
      }
    })
  }
})