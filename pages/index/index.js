//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    account:'',
    password:''
  },
  onChangeAccount: function(event)  {
    this.data.account = event.detail.value
  },
  onChangePassword: function(event) {
    this.data.password = event.detail.value
  },
  submit: function({detail}) {
    console.log(detail , this.data.account , this.data.password)
  }
})