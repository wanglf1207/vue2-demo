// 入口文件

// 引入vue框架当中的核心构造函数
import Vue from 'vue'
// 引入根组件
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
