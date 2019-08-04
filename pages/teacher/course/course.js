let {
  courseMap,
  toNext
} = require('../../../utils/util.js');
let wxCharts = require('../../../utils/wxcharts.js');
let radarChart = null;
let pieChart = null;
let pieChart1 = null;

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    TabCur: 0,
    vote: '',
    current: '投票',
    func: ['投票', '讨论', '签到', '评教']
  },
  ready() {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    radarChart = new wxCharts({
      canvasId: 'evaluation',
      type: 'radar',
      categories: ['阳光', '雨水', '乌云', '虫子'],
      series: [{
        name: '评分项',
        data: [125, 95, 47, 12]
      }],
      width: windowWidth,
      height: 300,
      extra: {
        radar: {
          max: 150
        }
      }
    })
    pieChart1 = new wxCharts({
      animation: true,
      canvasId: 'checkIn',
      type: 'pie',
      series: [{
        name: '未签人数',
        data: 15,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    })
  },
  methods: {
    tabSelect(e) {
      this.setData({
        vote: '',
        TabCur: e.currentTarget.dataset.id,
        current: ['投票', '讨论', '签到', '评教'][e.currentTarget.dataset.id]
      })
    },
    action(e) {
      let action = e.currentTarget.dataset.current
      if (action === '讨论') {
        toNext(courseMap['discuss'])
      } else if (action === '评教') {
        this.evaluation()
      } else if (action === '投票') {
        this.setData({
          vote: 'vote'
        })
        this.vote()
      } else if (action === '签到') {
        this.checkIn()
      }
    },
    touchHandler: function(e) {
      let choose = radarChart.getCurrentDataIndex(e)
    },
    evaluation() {
      var windowWidth = 320;
      let num1 = parseInt(Math.random() * 100)
      let num2 = parseInt(Math.random() * 100)
      let num3 = parseInt(Math.random() * 100)
      let num4 = parseInt(Math.random() * 100)
      try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
      } catch (e) {
        console.error('getSystemInfoSync failed!');
      }
      radarChart = new wxCharts({
        canvasId: 'evaluation',
        type: 'radar',
        categories: ['阳光', '雨水', '乌云', '虫子'],
        series: [{
          name: '评分项',
          data: [num1, num2, num3, num4]
        }],
        width: windowWidth,
        height: 300,
        extra: {
          radar: {
            max: 150
          }
        }
      })
    },
    vote() {
      let num1 = parseInt(Math.random() * 100)
      let num2 = parseInt(Math.random() * 100)
      let num3 = parseInt(Math.random() * 100)
      let num4 = parseInt(Math.random() * 100)
      var windowWidth = 320;
      try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
      } catch (e) {
        console.error('getSystemInfoSync failed!');
      }
      pieChart = new wxCharts({
        animation: true,
        canvasId: 'vote',
        type: 'pie',
        series: [{
          name: 'A',
          data: num1,
        }, {
          name: 'B',
          data: num2,
        }, {
          name: 'C',
          data: num3,
        }, {
          name: 'D',
          data: num4,
        }],
        width: windowWidth,
        height: 300,
        dataLabel: true,
      });
    },
    checkIn() {
      let nums = parseInt(Math.random() * 100) 

      var windowWidth = 320;
      try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
      } catch (e) {
        console.error('getSystemInfoSync failed!');
      }
      pieChart1 = new wxCharts({
        animation: true,
        canvasId: 'checkIn',
        type: 'pie',
        series: [{
          name: '未签人数',
          data: 15,
        }, {
          name: '已签人数',
          data: nums,
        }],
        width: windowWidth,
        height: 300,
        dataLabel: true,
      })
    }
  }

})