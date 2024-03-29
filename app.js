//app.js
App({
  onLaunch: function () {
    
    // 获取设备信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    userInfo: {
      id: '',
      schoolName: '',
      userName: '',
      identity: 'student'
    }
  }
})