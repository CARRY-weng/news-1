// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入vant
import Vant from 'vant'
//注册vant 
Vue.use(Vant)
//引入组件库样式文件
import 'vant/lib/index.css'

//引入axios
import axios from 'axios'
//绑定到原型
Vue.prototype.$axios = axios
//设置默认api域名
axios.defaults.baseURL = 'http://liangwei.tech:3000'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
