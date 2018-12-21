Page({
  searchBox: function (e) {
    this.setData({ first: e.detail.value.username, second: e.detail.value.pwd })  
      var that = this
    wx.request({
      url: "https://v.juhe.cn/exp/index?key=65833dd6abfb7b9984c67d44bf2fd296&com=" + e.detail.value.username + "&no=" + e.detail.value.pwd, 
      header: { "content-type": "json" },
      success: function (res) { console.log(res)       
       that.setData({ movie: res.data.result.list }) }
    })
  }
})

  