<template>
   <div class="register">

    <div class="closeBtn" @click="toLogin">
      <span class="iconfont iconicon-test"></span>
    </div>

    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <div class="inputNumber">
      <authInput 
      type='text' 
      placeholder='手机号码'
      rule='^\d{4,11}$'
      @input='getUserName'
      err_message='请输入正确的手机号码' ></authInput>
    </div>
    
    <div class="inputNickname">
       <authInput 
      type='text' 
      placeholder='昵称'
      rule='^\d{4,11}$'
      @input='getNickname'
      err_message='请输入正确的昵称' ></authInput>
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
      <authBtn text='注册' @send='sendRegister'/>
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
            nickName:'',
            passWord:''
        }
    },
    methods:{
        //获取手机号码
        getUserName(name){
            this.userName = name
        },
        //获取昵称
        getNickname(nickname){
            this.nickName = nickname
        },
        //获取密码
        getPassWord(password){
            this.passWord = password
        },
        //点击注册
        sendRegister(){
            this.$axios({
                url:'/register',
                method:'post',
                data:{
                    username:this.userName,
                    password:this.passWord,
                    nickname:this.nickName
                }
            }).then(res=>{
              console.log(res);
              if(!res.data.statusCode){  //失败提示在axios拦截器中已经做好了
                  this.$toast.success(res.data.message)
                  setTimeout(() => {
                    this.$router.push('/login')
                  }, 2000);
              }
            })
        },
        //回退按钮
        toLogin(){
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="less" scoped>
.register{
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
</style>