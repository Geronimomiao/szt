let wxCharts = require('../../utils/wxcharts.js');
let radarChart = null;
Component({
  options: {
    addGlobalClass: true,
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
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: ['1', '2', '3', '4', '5', '6'],
      series: [{
        name: '成交量1',
        data: [90, 110, 125, 95, 87, 122]
      }],
      width: windowWidth,
      height: 200,
      extra: {
        radar: {
          max: 150
        }
      }
    })
  },
  methods: {
    touchHandler: function (e) {
      console.log(radarChart.getCurrentDataIndex(e));
    },
  }
})