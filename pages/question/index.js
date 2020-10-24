// pages/question/index.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    titleBarHeight: app.globalData.titleBarHeight,
    isMusic: true,
    evaluation: [],
    questionIndex: -1,
    id: 0,
    music: "",
    audio: null,
    choise: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData(options.id);
    if (options.id) {
      this.fetchEvaluationDetail(options.id);
      if (this.data.audio == null) {
        this.setData({
          audio: wx.createInnerAudioContext()
        });
      }
      this.fetchConfig();
    } else { // can't get id, show error and back
      if (this.data.audio) {
        this.data.audio.stop();
        this.data.audio.destory();
        this.setData({
          audio: null
        });
      }
      wx.showToast({
        title: '我们好像遇到问题了，换一个量表试试吧。',
        icon: 'none'
      });
      wx.navigateBack({
        delta: 0,
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
    if (this.data.audio.paused) {
      this.data.audio.play();
    }
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    this.data.audio.stop();
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {
    this.data.audio.stop();
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

  /**
   * exit in tests
   */
  handleBackClick: function () {
    wx.showModal({
      title: "中断测试",
      content: "中断测试将丢失本次已做测试，是否继续？",
      confirmText: "狠心离去",
      cancelText: "再想想",
      cancelColor: 'cancelColor',
      success: (res) => {
        if (res.confirm) {
          wx.redirectTo({
            url: "/pages/index/index"
          })
        }
      }
    })
  },

  /** control musicl play or stop */
  handleMusicClick: function () {
    if (this.data.audio.paused) {
      this.data.audio.play();
      this.setData({
        isMusic: true
      });
    } else {
      this.data.audio.pause();
      this.setData({
        isMusic: false
      });
    }
  },

  handleOptionClick: function (e) {
    if (this.data.questionIndex < this.data.evaluation.questions.length - 1) {
      this.animate('.container', [{
          opacity: 1.0,
          //rotate: 0,
          ease: 'ease-out'
        },
        {
          opacity: 0.75,
          //rotate: 20
        },
        {
          opacity: 0.5,
          //rotate: 40
        },
        {
          opacity: 0.25,
          //rotate: 60
        },
        {
          opacity: 0,
          //rotate: 90
        },
        {
          opacity: 0.25,
          //rotate: 60
        },
        {
          opacity: 0.5,
          //rotate: 40
        },
        {
          opacity: 0.75,
          //rotate: 20
        },
        {
          opacity: 1.0,
          //rotate: 0
        },
      ], 500, function () {
        this.clearAnimation('.container', {
          opacity: true,
          rotate: true
        }, function () {

        })
      }.bind(this));

      if (e.currentTarget.dataset.id !== null) {
        let new_choise = this.data.choise;
        new_choise.push(e.currentTarget.dataset.id);
        this.setData({
          choise: new_choise
        });
      }

      this.setData({
        questionIndex: this.data.questionIndex + 1
      });

    } else {
      let new_choise = this.data.choise;
      if (e.currentTarget.dataset.id !== null) {
        new_choise.push(e.currentTarget.dataset.id);
        this.setData({
          choise: new_choise
        });
      }

      wx.showLoading({
        title: '评测中...',
      });

      let postData = {
        evaluation: this.data.evaluation.id,
        options: new_choise
      }

      wx.request({
        url: app.globalData.host + "/api/evaluation/score/",
        method: 'POST',
        data: postData,
        success: (res) => {
          wx.hideLoading({});
          wx.redirectTo({
            url: "/pages/score/index?id=" + res.data.id,
          });
        }
      });
    }
  },

  /** fetch app config (get background music) */
  fetchConfig: function () {
    wx.request({
      url: app.globalData.host + "/api/setting/app_config/",
      success: (res) => {
        this.setData({
          music: app.globalData.host + res.data.music
        });

        this.data.audio.src = res.data.music ? app.globalData.host + res.data.music : "/static/music/background.mp3";
      }
    });
  },

  /** fetch a evaluation by id */
  fetchEvaluationDetail: function (id) {
    wx.showLoading({
      title: '加载量表中...',
    });
    wx.request({
      url: app.globalData.host + "/api/evaluation/" + id + "/details/",
      success: (res) => {
        wx.hideLoading({});
        if (res.data.questions.length > 0) {
          this.setData({
            evaluation: res.data,
            questionIndex: 0
          });
          if (this.data.audio != null && res.data.questions.length > 0) {
            this.data.audio.play();
          }
        } else {
          wx.showToast({
            title: '我们好像遇到问题了，换一个量表试试吧。',
            icon: 'none'
          });
          wx.navigateBack({
            delta: 0,
          });
        }
      }
    });
  }
})