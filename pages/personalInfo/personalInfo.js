//personalInfo.js
const util = require('../../utils/util.js')

Page({
  data: {
    personalProfile: {
      sex: '女',
      age: 24,
      address: '北京'
    },
    intention: {
      jobStatus: '目前在职，正考虑换个新环境',
      workPlace: '北京',
      industry: '互联网/计算机软件',
      career: 'WEB前端开发',
      salary: '面议',
      natureWork: '全职'
    },
    experience:{
    },
    handsonExp: {
      sketch: '有*年前端开发经验，主要用到的技术栈是react也用vue开发过项目',
      detail:[]
    },
    projectExp: {
      sketch: '有pc端和移动端的开发经验，近期主要是开发pc端',
      detail:[]
    },
    evaluation: `很喜欢这个行业，在工作方面对自己要求严格，认真负责，自律能力强，
    工作期间无特殊情况是没有迟到早退现象，团队协作能力强，经常与同事沟通，工作中有不理解的地方也会主动与同事交流、探讨，
    有较强的团队精神，不管工作还是公司组织的一些活动之类的，都会认真对待，努力为团队贡献自己的一份力量！`
  },
  //事件处理函数
  handsonExp: function() {
    wx.navigateTo({
      url: '../handsonExp/handsonExp'
    })
  },
  onLoad: function () {
    let {personalProfile} = this.data
    wx.getUserInfo({
      success: res => {
        res.userInfo = {
          ...res.userInfo,
          nickName: 'xiaoli'
        }
        personalProfile = {
          ...personalProfile,
          ...res.userInfo
        }
        // console.log(personalProfile, 'personalProfile')
        this.setData({
          personalProfile: personalProfile
        })
      }
    })
  }
})
