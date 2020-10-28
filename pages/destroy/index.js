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

  /** fetch account destroy */
  fetchAccountDestroy: function () {
    wx.showLoading({
      title: '删除账号中...',
    });
    wx.request({
      url: app.globalData.host + '/api/user/destory/',
      method: 'POST',
      success: (res) => {
        wx.hideLoading();
        if (res.statusCode == 200) {
          wx.showToast({
            title: '全部个人数据已删除',
          });
          app.globalData.token = undefined;
          app.globalData.userInfo = {};
          wx.removeStorage({
            key: 'token',
          });
          wx.redirectTo({
            url: "/pages/index/index",
          });
        } else {
          wx.showToast({
            title: '请求失败，请重试...',
            icon: 'none'
          });
        }
      },
      fail: (res) => {
        wx.hideLoading();
        wx.showToast({
          title: '网络问题，请检查后重试...',
          icon: 'none'
        });
      }
    })
  },

  handleDestroyClick: function () {
    wx.showModal({
      cancelColor: 'cancelColor',
      title: "删除账号",
      content: "注意: 本操作将删除账号。",
      confirmText: "确认删除",
      cancelText: "再想想",
      success: (res) => {
        if (res.confirm) {
          this.fetchAccountDestroy();
        } else if (res.cancel) {
          wx.navigateBack({
            delta: 0,
          });
        }
      }
    })
  },

  handleBackClick: function () {
    wx.navigateBack({
      delta: 0,
    });
  },


})