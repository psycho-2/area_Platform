// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import store from './store'
import router from './router'
import Mint from 'mint-ui'
import 'Mint-ui/lib/style.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
// import './../myTheme/index.less'
// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require('./assets/img/error.jpg'),
  loading: require('./assets/img/loading.gif'),
  attempt: 2,
})

Vue.use(iView)
// register filters globally
var filters = require('./filter')
Vue.config.devtools = true
Object.keys(filters).forEach(function (k) {
    Vue.filter(k, filters[k])
})

// 创建一个路由器实例
// 并且配置路由规则
Vue.use(Mint)
/* eslint-disable no-new */

//钩子函数 在路由进来以前实行的函数
router.beforeEach((to, from, next) => {
  // console.log(1);
  document.documentElement.scrollTop = document.body.scrollTop = 0;
  next();
})
var app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})


