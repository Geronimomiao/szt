Page({
  data: {
    timer: ''
  },
  onReady() {
    this.loading()
  },
  loading() {
    this.timer = setTimeout(() => {
      clearTimeout(this.timer)
      this.direct()
    }, 2000)
  },
  direct() {
    // let auth = utils.ifLogined()
    // let url = '/pages/feidian/feidian'
    // if (auth) {
    //   url = '/pages/index/index'
    // }
    let url = '/pages/select/select'
    wx.navigateTo({
      url,
    })
  },
  skip() {
    clearTimeout(this.timer);
    wx.navigateTo({
      url: '/pages/select/select'
    })
  },
})