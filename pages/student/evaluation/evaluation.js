// pages/student/evaluation/evaluation.js
let { toNext } = require('../../../utils/util.js')

Page({
  data: {
    hasSelected: false,
    selectClass: 'select-2',
    point: '+5',
    modalName: ''
  },


  choice(e) {
    let point = e.currentTarget.dataset.point
    let selectClass = e.currentTarget.dataset.selectclass
    console.log(e.currentTarget.dataset)
    this.setData({
      hasSelected: true,
      selectClass: selectClass,
      point: point
    })
    setTimeout(() => {
      this.setData({
        modalName: 'DialogModal'
      })
    }, 1300)
  },

  hideModal() {
    this.setData({
      modalName: ''
    })
    let url = '/pages/student/index/index'
    toNext(url)
  }

})