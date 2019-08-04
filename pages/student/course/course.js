let { courseMap, toNext } = require('../../../utils/util.js')

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
      let url = courseMap[dest]
      toNext(url)
    },
    hideModal() {
      this.setData({
        modalName: ''
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
