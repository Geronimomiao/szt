Page({
  data: {
    timer: ''
  },
  onLoad() {
    this.timer = setTimeout(() => {
      clearTimeout(timer)
      this.direct()
    }, 2000)
  },
  direct() {
    // let auth = utils.ifLogined()
    // let url = '/pages/feidian/feidian'
    // if (auth) {
    //   url = '/pages/index/index'
    // }
    let url = '/pages/index/index'
    wx.navigateTo({
      url,
    })
  },
  skip() {
    clearTimeout(this.timer);
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
})