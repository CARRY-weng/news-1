<template>
  <div class="profile">
    <div class="header">
      <div class="img">
        <img src = 'http://n.sinaimg.cn/translate/w402h363/20180213/bg7r-fyrpeie1413753.jpg' />
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.profile{

}
.header{
  padding: 5.556vw 5.556vw;
  background: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .img{
    img{
      width: 22.222vw;
      height: 22.222vw;
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