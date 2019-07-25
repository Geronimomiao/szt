const { toNext } = require('../../utils/util.js') 

Page({
  toSuccess() {
    let url = '/pages/teacher/index/index';
    toNext(url);
  }
})