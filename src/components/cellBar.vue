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
  height: 55px;
  line-height: 55px;
  border-bottom: 1px solid #e4e4e4 ;
  margin-left: 20px;
  padding-right: 20px;
  display: flex;
  .left{
    flex: 1;
  }
  .middle{
    font-size: 14px;
    color: #a2a2a2;
  }
  .iconfont{
    padding-left: 5px;
  }
}
</style>