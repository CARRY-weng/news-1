// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//添加路由守卫
router.beforeEach((to,from,next)=>{
  //获取本地token
  var token = localStorage.getItem('token')
  //这里是去个人中心的逻辑
  if(to.path == '/profile'){
    //如果token不存在 就跳转到登录页面
    if(token){
      next()
    }else{
      router.push({
        name:'loginPage'
      })
    }
  }
  //这里是去其他页面的逻辑
  else{
   next() 
  }
})

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

//引入vant的弹窗（非组件）
import { Toast } from 'vant';


//设置默认api域名
axios.defaults.baseURL = 'http://liangwei.tech:3000'
//本地服务器
// axios.defaults.baseURL = 'http://127.0.0.1:3000'

//axios 响应拦截器
axios.interceptors.response.use((res)=>{
  const {message,statusCode} = res.data  //先获取res 中的message 和 statusCode 
  if(message && statusCode == 401){
    console.log('响应被拦截了');
    // Toast.fail(message)
    Toast.fail(message);
  } 
  return res
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
