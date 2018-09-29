Page({
    data:{
        handsonExpList:[
            {
                companyName: '某某某某某某某某公司',
                id: 121234,
                time: '2018-555',
                content: `1、每个wxs标签都有一个module 属性
                1、wxs可以写在wxml里面的wxs标签里和.wxs文件里
                2、wxs文件中引入其他wxs文件时候，可以使用require函数，接受相对路径
                3、在wxml标签里使用外部wxs文件的时候，src属性是相对路径
                `
            },{
                companyName: '某某某某某某某某公司',
                id: 45656,
                time: '2017.9',
                content: `1、app.js做为小程序的入口，里面有个App实例，每个小程序只会有一个App实例，小程序启动以后触发onLaunch函数执行，获取用户信息
                2、app.json是小程序的所有全局配置，pages字段放置所有页面的路径，window字段定义所有页面的顶部背景颜色，文字颜色 详细配置请戳这里👇
                3、app.wxss文件就是页面公用的样式，仅支持部分css选择器
                4、wxml就是我们的HTML文件，常用标签为 view 、text 等，没有所谓的div、span、p一类的标签了，我们习惯称它们为组件
                `
            },{
                companyName: '某某某某某某某某公司',
                id:79449,
                time: '2016.6',
                content: `WXS是小程序的一套脚本语言，首先和js是不同的语言，其次运行环境和js也是隔离开的，wxs不能调用js文件中的函数，
                也不能调用小程序的API，它主要用来增强wxml。`
            }
        ]
    },
    onLoad: function(){

    }
})