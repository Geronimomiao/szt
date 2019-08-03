let { studentCourseMap, toNext } = require('../../../utils/util.js')

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    modalName: ''
  },

  methods: {
    goNext(e) {
      let dest = e.currentTarget.dataset.dest
      let url = studentCourseMap[dest]
      toNext(url)
    },
    hideModal() {
      this.setData({
        modalName: ''
      })
    },
    check() {
      this.setData({
        modalName: 'success'
      })
    },
    change(e) {
      let type = e.currentTarget.dataset.type
      this.setData({
        modalName: type
      })
    }
  }

})
