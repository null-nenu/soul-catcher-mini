// pages/score/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    titleBarHeight: app.globalData.titleBarHeight,
    score: 0,
    socreText: "",
    note: "",
    noteLink: "",
    recommends: []
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
    wx.redirectTo({
      url: "/pages/index/index",
    });
  },

  fetchRate: function () {
    wx.showLoading({
      title: "评测中...",
    });

    setTimeout(() => {
      wx.hideLoading();
      let recommends = [{
          image: "https://movieberry.com/static/photos/41431/50_midi.jpg",
          id: "",
          url: "",
          title: "Fly Away Home",
          text: "温暖和治愈"
        },
        {
          image: "https://movieberry.com/static/photos/41431/50_midi.jpg",
          id: "",
          url: "",
          title: "Fly Away Home",
          text: "温暖和治愈"
        },
        {
          image: "https://movieberry.com/static/photos/41431/50_midi.jpg",
          id: "",
          url: "",
          title: "Fly Away Home",
          text: "温暖和治愈"
        },
        {
          image: "https://movieberry.com/static/photos/41431/50_midi.jpg",
          id: "",
          url: "",
          title: "Fly Away Home",
          text: "温暖和治愈"
        }, {
          image: "https://movieberry.com/static/photos/41431/50_midi.jpg",
          id: "",
          url: "",
          title: "Fly Away Home",
          text: "温暖和治愈"
        }
      ];
      this.setData({
        score: 51,
        socreText: "完美状态",
        note: "一切看起来很好，继续保持心情愉快哦",
        noteLink: "",
        recommends: recommends
      })
    }, 3000);
  }
})