import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//引入组件
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'
import HomePage from '@/pages/HomePage'
import EditProfilePage from '@/pages/EditProfilePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'homePage',
      component:HomePage
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
    {
      path:'/editprofile',
      name:'editProfilePage',
      component: EditProfilePage
    },
  ]
})
