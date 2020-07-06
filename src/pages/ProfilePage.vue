<template>
  <div class="profile">
    <div class="header">
      <div class="img">
        <img v-if='!profile.head_img' src = "../assets/微信图片_20200704184825.jpg" />
        <img v-else :src = "'http://liangwei.tech:3000' + profile.head_img" />
      </div>
      <div class="middle">
        <div class="name">
          <span v-if=" profile.gender == 1 " class="iconfont iconxingbienan"></span>
          <span v-else class="iconfont iconxingbienv"></span>
          {{profile.nickname}}
        </div>
        <div class="time">
          2019-10-10
        </div>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </div>
    <div class="line"></div>
    <cellBar 
    lable='我的关注'
    desc='关注的用户'
    @topage='topage'/>
    <cellBar 
    lable='我的跟帖'
    desc='跟帖/回复'
    @topage='topage'/>
    <cellBar 
    lable='我的收藏'
    desc='文章/收藏'
    @topage='topage'/>
    <cellBar 
    lable='设置'
    desc=''
    @topage='$router.push("/editprofile")'/>
    <cellBar 
    lable='退出登录'
    desc=''
    @topage='logout'/>
  </div>
</template>

<script>
import cellBar from '../components/cellBar'
export default {
  components:{
    cellBar:cellBar
  },
  data(){
    return {
      profile:{

      }
    }
  },
  methods:{
    topage(page){
      console.log('跳转到' + page + '页面');
      
    },
    logout(){
      //点击退出登录 要把本地储存的东西删除
      localStorage.removeItem('token')
      localStorage.removeItem('user_id')
      //还要把页面替换为 登录页面 （得用replace）
      this.$router.replace({
        path:'/login'
      })

    }
  },
  mounted(){
    console.log('好了');
    
    this.$axios({
      url:'/user/'+localStorage.getItem('user_id'),
      method:'get',
      headers:{
        Authorization:localStorage.getItem('token')
      }
    }).then(res=>{
      console.log(res);
      this.profile = res.data.data
    })
  }
}
</script>

<style lang="less" scoped>
.profile{

}
.line{
  height: 1.389vw;
  background: #f2f2f2;
}
.header{
  padding: 5.556vw 5.556vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .img{
    img{
      width: 16.667vw;
      height: 16.667vw;
      border-radius: 50%;
    }
  }
  .middle{
    flex: 1;
    padding-left: 2.778vw;
    .name{
      margin-bottom: 1.389vw;
      // .iconfont{
      //   color: #99c0de;
      // }
      .iconxingbienan{
        color: #99c0de;
      }
      .iconxingbienv{
        color:pink
      }
    }
  }
}
</style>