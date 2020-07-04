<template>
  <div class="profile">
    <div class="header">
      <div class="img">
        <img src = 'http://www.005.tv/uploads/allimg/190116/55-1Z116143141217.jpeg' />
      </div>
      <div class="middle">
        <div class="name">
          <span class="iconfont iconxingbienan"></span>
          火星网友
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
    @topage='topage'/>
  </div>
</template>

<script>
import cellBar from '../components/cellBar'
export default {
  components:{
    cellBar:cellBar
  },
  methods:{
    topage(page){
      console.log('跳转到' + page + '页面');
      
    }
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
      .iconfont{
        color: #99c0de;
      }
    }
  }
}
</style>