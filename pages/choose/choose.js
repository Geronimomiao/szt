const { routerMap, toNext } = require('../../utils/util.js')

Page({
  data: {
    dest: '',
    course_name: ''
  },

  
  onLoad: function (options) {
    this.setData({
      dest: options.dest
    })
  },

  go(e) {
    this.setData({
      course_name: e.currentTarget.dataset.cur,
    })
    this.goForDest()
  },

  goForDest() {
    console.log(routerMap[this.data.dest])
    const destUrl = routerMap[this.data.dest]
    toNext(destUrl)
  },

  goSuccess() {
    let url = '/pages/addcourse/addcourse'
    toNext(url)
  }

})