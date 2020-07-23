Page({
  data: {
    searchTxt: '初始值'
  },
  onLoad: function (options) {

  },
  changeValue(e) {
    this.setData({
      searchTxt: e.detail.value
    })
  }
})