Page({

  data: {
    
  },

  onLoad: function (options) {
    
  },
  
  toVideo() {
    let url = '/pages/video/video'
    wx.navigateTo({
      url,
    })
  },

  toRecord() {
    let url = '/pages/record/record'
    wx.navigateTo({
      url,
    })
  }

})