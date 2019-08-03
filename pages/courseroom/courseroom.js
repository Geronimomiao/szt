const app = getApp()

Page({

  data: {
    identify: ''
  },

  onLoad: function (options) {
    this.setData({
      identify: app.globalData.userInfo.identity
    })
  },

})