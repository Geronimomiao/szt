const { toNext } = require('../../utils/util.js')
const app = getApp()

Page({

  data: {
    status: '',
    dest: ''
  },

  toLogin() {
    if (this.data.dest) {
      let url = '/pages/login/login?dest=' + this.data.dest;
      // console.log(url);
      toNext(url);
    }
    
  },

  choose(e) {
    // console.log(e.target.dataset)
    // 获取用户 身份信息 并保存至全局变量
    app.globalData.userInfo.identity = e.target.dataset.dest
    // console.log(app.globalData.userInfo.identity)


    this.setData({
      status: e.target.dataset.status,
      dest: e.target.dataset.dest
    })
  }

})