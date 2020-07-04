<template>
  <div class="cellbar" @click='jumpPage'>
      <span class="left">
        {{lable}}
      </span>
      <span class="middle">{{desc}}</span>
      <span class="iconfont iconjiantou1"></span>
  </div>
</template>

<script>
export default {
  props:[
    'lable',
    'desc'
  ],
  methods:{
    jumpPage(){
      this.$emit('topage',this.lable)
    }
  }
}
</script>

<style lang="less" scoped>
.cellbar{
  height: 15.278vw;
  line-height: 15.278vw;
  border-bottom: 1px solid #e4e4e4 ;
  margin-left: 5.556vw;
  padding-right: 5.556vw;
  display: flex;
  .left{
    flex: 1;
  }
  .middle{
    font-size: 3.889vw;
    color: #a2a2a2;
  }
  .iconfont{
    padding-left: 1.389vw;
  }
}
</style>