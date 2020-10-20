// pages/question/index.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    titleBarHeight: app.globalData.titleBarHeight,
    isMusic: true,
    questions: [],
    questionIndex: -1
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.fetchQuestions();
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
        wx.redirectTo({
          url: "/pages/index/index"
        })
      }
    })
  },

  /**
   * @param testId
   */
  fetchQuestions: function (testId) {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });

    setTimeout((testId) => {
      let questions = [{
          id: 0,
          question: "我觉得闷闷不乐，情绪低沉",
          options: [{
              id: 0,
              text: "没有或很少时间"
            },
            {
              id: 0,
              text: "小部分时间"
            },
            {
              id: 0,
              text: "相当多时间"
            }, {
              id: 0,
              text: "绝大部分或全部时间"
            }
          ]
        },
        {
          id: 1,
          question: "我觉得一天中早晨最好",
          options: [{
              id: 0,
              text: "没有或很少时间"
            },
            {
              id: 0,
              text: "小部分时间"
            },
            {
              id: 0,
              text: "相当多时间"
            }, {
              id: 0,
              text: "绝大部分或全部时间"
            }
          ]
        },
        {
          id: 0,
          question: "一阵阵哭出来或觉得想哭",
          options: [{
              id: 0,
              text: "没有或很少时间"
            },
            {
              id: 0,
              text: "小部分时间"
            },
            {
              id: 0,
              text: "相当多时间"
            }, {
              id: 0,
              text: "绝大部分或全部时间"
            }
          ]
        }
      ];

      this.setData({
        questions: questions,
        questionIndex: 0
      });

      wx.hideLoading();
    }, 3000);
  },

  handleMusicClick: function () {
    this.setData({
      isMusic: !this.data.isMusic
    });
  },

  handleOptionClick: function (e) {
    if (this.data.questionIndex < this.data.questions.length - 1) {
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
      }.bind(this))

      this.setData({
        questionIndex: this.data.questionIndex + 1
      });
    } else {
      wx.redirectTo({
        url: "/pages/score/index",
      });
    }
  }
})