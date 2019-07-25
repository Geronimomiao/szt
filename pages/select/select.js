const { toNext } = require('../../utils/util.js')

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
    console.log(e.target.dataset)
    this.setData({
      status: e.target.dataset.status,
      dest: e.target.dataset.dest
    })
  }

})