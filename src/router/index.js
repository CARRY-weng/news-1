import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//引入组件
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'loginPage',
      component: LoginPage

    },
    {
      path:'/register',
      name:'registerPage',
      component: RegisterPage

    },
    {
      path:'/profile',
      name:'profilePage',
      component: ProfilePage

    },
  ]
})
