// components/page/index.js
const app = getApp();
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    titleBarHeight: app.globalData.titleBarHeight
  },

  /**
   * Component methods
   */
  methods: {

  },
  options: {
    multipleSlots: true
  }
})