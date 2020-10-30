// pages/history/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    titleBarHeight: 44,
    recordList: [],
    overview: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // test have token?
    if (app.globalData.token == undefined) {
      wx.showToast({
        title: '只有登录的用户才能查看评测历史哦',
        icon: "none",
        success() {
          setTimeout(() => {
            wx.navigateBack({
              delta: 0,
            });
          }, 1000);
        }
      });
    } else {
      this.fetchHistorysList();
      this.fetchHistoryOverview();
    }
    // get system information
    if (app.globalData.titleBarHeight) {
      this.setData({
        titleBarHeight: app.globalData.titleBarHeight
      });
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

  /** fetch user test historys list */
  fetchHistorysList: function () {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    wx.request({
      url: app.globalData.host + "/api/evaluation_record/detailed/",
      header: {
        "Authorization": "Token " + app.globalData.token
      },
      success: (res) => {
        wx.hideLoading({});
        if (res.statusCode == 200) {
          this.setData({
            recordList: res.data
          });
        } else {
          wx.showToast({
            title: '加载失败，请稍后重试...',
            icon: 'none'
          });
        }
      },
      fail() {
        wx.hideLoading({});
        wx.showToast({
          title: '网络似乎有问题，请稍后重试...',
          icon: 'none'
        });
      }
    })
  },

  fetchHistoryOverview: function () {
    wx.request({
      url: app.globalData.host + "/api/evaluation_record/overview/",
      header: {
        "Authorization": "Token " + app.globalData.token
      },
      success: (res) => {
        if (res.statusCode == 200) {
          this.setData({
            overview: res.data
          })
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
    })
  }
})