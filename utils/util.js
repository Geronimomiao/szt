const routerMap = {
  'courseware': '/pages/courseware/courseware',
  'courseroom': '/pages/courseroom/courseroom',
  'createcourse': '/pages/createcourse/createcourse',
  'video': '/pages/video/video',
} 

const toNext = (url) => {
  wx.navigateTo({
    url,
  })
}

module.exports = {
  routerMap,
  toNext
}
