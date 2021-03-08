import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      name: 'index',
      path: '/',
      component: resolve => require(['../views/index.vue'], resolve),
      redirect: '/plugIn',
      children: [
        {
          // ios插件
          path: 'plugIn',
          component: resolve => require(['../views/plugIn.vue'], resolve),
          // 如果用import引入的话，当项目打包时路由里的所有component都会打包在一个js中，造成进入首页时，需要加载的内容过多，时间相对比较长。
          // 当你用require这种方式引入的时候，会将你的component分别打包成不同的js，加载的时候也是按需加载，只用访问这个路由网址时才会加载这个js。
        },
        {
          path: 'ui',
          component: resolve => require(['../views/ui.vue'], resolve)
        },
        {
          path: 'server',
          component: resolve => require(['../views/server.vue'], resolve)
        }
      ]
    },
    // 一级 ios插件
    {
      // 数据加减密
      name: 'encryption',
      path: '/encryption',
      component: resolve => require(['../views/plugIn/encryption.vue'], resolve),
    },
    {
      // 数据库操作
      name: 'operation',
      path: '/operation',
      component: resolve => require(['../views/plugIn/operation.vue'], resolve)
    },
    {
      // 外接设备
      name: 'external',
      path: '/external',
      component: resolve => require(['../views/plugIn/external.vue'], resolve)
    },
    {
      // 数据请求
      name: 'dataRequest',
      path: '/dataRequest',
      component: resolve => require(['../views/plugIn/dataRequest.vue'], resolve),
      redirect: '/dataRequest/data',
      children: [
        {
          // 数据
          path: 'data',
          component: resolve => require(['../views/plugIn/dataRequest/data.vue'], resolve),
        },

        {
          // 文件上传
          path: 'upload',
          component: resolve => require(['../views/plugIn/dataRequest/upload.vue'], resolve)
        },
        {
          // 文件下载
          path: 'download',
          component: resolve => require(['../views/plugIn/dataRequest/download.vue'], resolve)
        }
      ]
    },
    {
      // 拍照音视频
      name: 'recording',
      path: '/recording',
      component: resolve => require(['../views/plugIn/recording.vue'], resolve)
    },
    {
      // 图片处理
      name: 'picture',
      path: '/picture',
      component: resolve => require(['../views/plugIn/picture.vue'], resolve)
    },
    {
      // 文件操作
      name: 'file',
      path: '/file',
      component: resolve => require(['../views/plugIn/file.vue'], resolve)
    },
    {
      // 设备信息
      name: 'equipment',
      path: '/equipment',
      component: resolve => require(['../views/plugIn/equipment.vue'], resolve)
    },
    // 设备信息二级 状态栏设置
    {
      name: 'setting',
      path: '/setting',
      component: resolve => require(['../views/plugIn/setting.vue'], resolve)
    },
    {
      // 文档阅读
      name: 'reading',
      path: '/reading',
      component: resolve => require(['../views/plugIn/reading.vue'], resolve)
    },
    {
      // 文档阅读
      name: 'application',
      path: '/application',
      component: resolve => require(['../views/plugIn/application.vue'], resolve)
    },
    {
      // 遮罩效果
      name: 'mask',
      path: '/mask',
      component: resolve => require(['../views/plugIn/mask.vue'], resolve)
    },
    // 数据加解密 二级目录
    {
      name: 'RSA',
      path: '/RSA',
      component: resolve => require(['../views/encryption/RSA.vue'], resolve)
    },
    {
      name: 'AES256',
      path: '/AES256',
      component: resolve => require(['../views/encryption/AES256.vue'], resolve)
    },
    {
      name: 'DES',
      path: '/DES',
      component: resolve => require(['../views/encryption/DES.vue'], resolve)
    },
    {
      name: 'MD5',
      path: '/MD5',
      component: resolve => require(['../views/encryption/MD5.vue'], resolve)
    },
    {
      name: 'nationalSecret1',
      path: '/nationalSecret1',
      component: resolve => require(['../views/encryption/nationalSecret1.vue'], resolve)
    },
    {
      name: 'nationalSecret2',
      path: '/nationalSecret2',
      component: resolve => require(['../views/encryption/nationalSecret2.vue'], resolve)
    },
    // // 外接设备二级目录
    {
      name: 'clamp',
      path: '/clamp',
      component: resolve => require(['../views/external/clamp.vue'], resolve)
    },
    {
      name: 'cardSender',
      path: '/cardSender',
      component: resolve => require(['../views/external/cardSender.vue'], resolve)
    },
    {
      name: 'shield',
      path: '/shield',
      component: resolve => require(['../views/external/shield.vue'], resolve)
    },
    // 外接设备(背夹)三级目录
    {
      name: 'idCard',
      path: '/idCard',
      component: resolve => require(['../views/external/clamp/idCard.vue'], resolve)
    },
    {
      name: 'bankCard',
      path: '/bankCard',
      component: resolve => require(['../views/external/clamp/bankCard.vue'], resolve)
    },
    {
      name: 'fingerprint',
      path: '/fingerprint',
      component: resolve => require(['../views/external/clamp/fingerprint.vue'], resolve)
    },
    // 拍照录音视频 二级目录
    {
      name: 'photograph',
      path: '/photograph',
      component: resolve => require(['../views/plugIn/recording/photograph.vue'], resolve)
    },
    {
      name: 'audio',
      path: '/audio',
      component: resolve => require(['../views/plugIn/recording/audio.vue'], resolve)
    },
    {
      name: 'recordVideo',
      path: '/recordVideo',
      component: resolve => require(['../views/plugIn/recording/recordVideo.vue'], resolve)
    },
    {
      name: 'barCode',
      path: '/barCode',
      component: resolve => require(['../views/plugIn/recording/barCode.vue'], resolve)
    },
    {
      name: 'systemAlbum',
      path: '/systemAlbum',
      component: resolve => require(['../views/plugIn/recording/systemAlbum.vue'], resolve)
    },
    {
      name: 'photoDisplay',
      path: '/photoDisplay',
      component: resolve => require(['../views/plugIn/recording/photoDisplay.vue'], resolve)
    },
    {
      name: 'videoPlayback',
      path: '/videoPlayback',
      component: resolve => require(['../views/plugIn/recording/videoPlayback.vue'], resolve)
    },
    // // 图片处理二级目录
    {
      // 图片合成
      name: 'synthesis',
      path: '/synthesis',
      component: resolve => require(['../views/plugIn/picture/synthesis.vue'], resolve)
    },
    {
      // 水印效果
      name: 'watermark',
      path: '/watermark',
      component: resolve => require(['../views/plugIn/picture/watermark.vue'], resolve)
    },
    // 一级 ui库
    {

      // 轮播组件
      name: 'assembly',
      path: '/assembly',
      component: resolve => require(['../views/ui/assembly.vue'], resolve)
    },
    {
      // 单页面路由跳转
      name: 'routingJump',
      path: '/routingJump',
      component: resolve => require(['../views/ui/routingJump.vue'], resolve)
    },
    {
      // 轮播图
      name: 'sowingMap',
      path: '/sowingMap',
      component: resolve => require(['../views/ui/sowingMap.vue'], resolve)
    },
    {
      // 弹出框
      name: 'popUp',
      path: '/popUp',
      component: resolve => require(['../views/ui/popUp.vue'], resolve)
    },
    {
      // 进度条
      name: 'progressBar',
      path: '/progressBar',
      component: resolve => require(['../views/ui/progressBar.vue'], resolve)
    },
    {
      // 加载提示框
      name: 'indicator',
      path: '/indicator',
      component: resolve => require(['../views/ui/indicator.vue'], resolve)
    },
    {
      // 无限滚动
      name: 'infiniteScroll',
      path: '/infiniteScroll',
      component: resolve => require(['../views/ui/infiniteScroll.vue'], resolve)
    },

  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0,0)
  // 登录验证...
  next()
})

router.afterEach((to, from, next) => {

})

export default router
