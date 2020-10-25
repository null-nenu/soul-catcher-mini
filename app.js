//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    //var logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    //wx.setStorageSync('logs', logs)

    // get token form storage
    wx.getStorage({
      key: "token",
      success: (res) => {
        // set token to global data token
        this.globalData.token = res.data;
        if (this.tokenReadyCallback) {
          this.tokenReadyCallback(res.data);
        }

        // get user information of wechat
        // 获取用户信息
        wx.getSetting({
          success: (res) => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  this.globalData.userInfo = res

                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res);
                  }
                }
              })
            } else {
              this.globalData.token = undefined;
              wx.removeStorage({
                key: 'token'
              });
            }
          }
        });
      }
    })


    // get system information
    wx.getSystemInfo({
      success: (result) => {
        // all system information
        this.globalData.systemInfo = result;
        // status bar height
        this.globalData.statusBarHeight = result.statusBarHeight;
        // title bar height of android to 54, default is 44 in globalData
        if (result.system.indexOf('Android') !== -1) {
          this.globalData.titleBarHeight = 54
        }
      },
      fail: (err) => console.log(err)
    });

    /* get app config from service(background image, background music, daily words) */
    wx.request({
      url: this.globalData.host + "/api/setting/app_config/",
      success: (res) => {
        this.globalData.config = res.data;
      }
    })
  },

  globalData: {
    userInfo: null,
    systemInfo: null,
    titleBarHeight: 44,
    statusBarHeight: 20,
    host: 'http://localhost', //http://39.107.61.225
    config: {}
  }
})