<template>
  <div class="login">

    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>

    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <div class="inputName">
      <authInput 
      type='text' 
      placeholder='请输入手机号'
      rule='^\d{4,11}$'
      @input='getUserName'
      err_message='请输入正确的手机号码' ></authInput>
    </div>
    
    <div class="inputPwd">
       <authInput 
      type='password' 
      placeholder='请输入密码'
      rule='^\d{4,11}$'
      @input='getPassWord'
      err_message='请输入正确的密码' ></authInput>
    </div>  

    <div class="btn">
      <authBtn text='登录' @send='sendLogin'/>
    </div>
    <div class='toRegister' @click='toRegister'>
      还没有账号？注册一个
    </div>
  </div>
</template>

<script>
import authInput from '../components/authinput'
import authBtn from '../components/authBtn'



export default {
  components:{
    authInput:authInput,
    authBtn:authBtn
  },
  data(){
    return {
      userName:'',
      userPassWord:''
    }
  },
  methods:{
    //接受用户名组件输入的数据
    getUserName(name){
      this.userName=name
      // console.log('接收了用户名组件的数据',this.userName);
    },
    getPassWord(password){
      this.userPassWord = password
    },
    //点击登录按钮触发
    sendLogin(){
      // console.log(`登录按钮被点击了，应该发送ajax请求,发送用户名：${this.userName}和用户密码：${this.userPassWord}`);
      this.$axios({
        url:'/login',
        method:'post',
        data:{
          username:this.userName,
          password:this.userPassWord
        }
      }).then(res=>{
        console.log(res);
        if(!res.data.statusCode){  //失败的提示在axios拦截器中做了 这里是只要返回的res没有statusCode 就证明成功 就直接弹出message
          //保存数据到本地
          localStorage.setItem('token',res.data.data.token)
          localStorage.setItem('user_id',res.data.data.user.id)
          //弹窗提示登录成功
          this.$toast.success(res.data.message)
          //设置定时器 跳转到个人中心页面
          var timer = setTimeout(() => {
            this.$router.push({
              name:'profilePage'
            })
          }, 2000);
        }
      })
    },
    //点击跳转到注册页面
    toRegister(){
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  padding: 0 20px;
}
.closeBtn{
  padding: 20px 0;
  .iconfont{
    font-size: 7.5vw;
  }
}
.logo{
  display: flex;
  justify-content: center;
  .iconfont{
    font-size: 35vw;
    color: #d41d04;
    
  }
}
.btn{
  margin-top: 20.556vw;
}
.toRegister{
  margin-top: 2.778vw;
  text-align: center;
}
</style>