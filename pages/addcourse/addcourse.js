Page({
  data: {
    confirm: '',
  },
  showModal(e) {
    console.log(this.data.confirm)
    this.setData({
      confirm: 'success'
    })
  },
  hideModal(e) {
    this.setData({
      confirm: null
    })
  },
})