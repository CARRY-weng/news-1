<template>
  <div class="headermiddle">
      <span class="iconfont iconjiantou2" @click='back'></span>
      <span class="name">{{lable}}</span>
  </div>
</template>

<script>
export default {
    props:[
        'lable'
    ],
    methods:{
        back(){
            this.$emit('back')
        }
    }
}
</script>

<style lang="less" scoped>
.headermiddle{
    display: flex;
    justify-content: space-between;
    line-height: 13.889vw;
    height: 13.889vw;
    .name{
        flex: 1;
        text-align: center;
        padding-right: 10vw;
        font-weight: bold;
    }
    .iconfont{
        padding-left: 5.556vw;
    }
}
</style>