const routerMap = {
  'courseware': '/pages/courseware/courseware',
  'courseroom': '/pages/courseroom/courseroom',
  'createcourse': '/pages/createcourse/createcourse',
  'video': '/pages/video/video',
} 


const studentCourseMap = {
  'evaluation': '/pages/student/evaluation/evaluation',
}


const toNext = (url) => {
  wx.navigateTo({
    url,
  })
}

module.exports = {
  studentCourseMap,
  routerMap,
  toNext
}
