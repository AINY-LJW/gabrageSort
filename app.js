//logs.js
const log = require('./utils/log.js')
log.info('进入应用') // 日志会和当前打开的页面关联，建议在页面的onHide、onShow等生命周期里面打
App({
  onLaunch: function () {
    var _this = this;
  },
  globalData: {
    userInfo: {
      avatarUrl: '/images/20190727180127.jpg',
      nickName: '未命名'
    }
  }
})