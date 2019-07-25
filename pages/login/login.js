const { toNext } = require('../../utils/util.js')

Page({

  data: {
    url: ''
  },

  onLoad(options) {
    this.setData({
      url: '/pages/' + options.dest + '/index/index'
    })
  },
  
  goForIndex() {
    toNext(this.data.url)
  }
})