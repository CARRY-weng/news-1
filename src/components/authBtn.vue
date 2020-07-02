<template>
  <div class="authBtn" @click='handleClick'>
      {{text}}
  </div>
</template>

<script>
export default {
    props:[
        'text'
    ],
    methods:{
        handleClick(){
            this.$emit('send')
        }
    }
}
</script>

<style lang="less" scoped>
.authBtn{
    // width: 318px;
    height: 10.556vw;
    line-height: 10.556vw;
    text-align: center;
    color: #fff;
    background: #cb3100;
    border-radius: 5.278vw;
}
</style>