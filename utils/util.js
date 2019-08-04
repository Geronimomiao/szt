const routerMap = {
  'courseware': '/pages/courseware/courseware',
  'courseroom': '/pages/courseroom/courseroom',
  'createcourse': '/pages/createcourse/createcourse',
  'video': '/pages/video/video',
} 


const courseMap = {
  'evaluation': '/pages/student/evaluation/evaluation',
  'discuss': '/pages/discuss/discuss',
}


const toNext = (url) => {
  wx.navigateTo({
    url,
  })
}

module.exports = {
  courseMap,
  routerMap,
  toNext
}
