<template>
  <div>
      <input :type="type" :placeholder='placeholder' @input='datachange' :class='{ err:!isOk }' @blur='handleBlur'>
  </div>
</template>

<script>
export default {
    props:[
        'type',
        'placeholder',
        'rule',
        'err_message'
    ],
    data(){
        return {
            isOk:true
        }
    },
    methods:{
        //input事件
        datachange($event){
            
            if(!$event.target.value){
                this.isOk = true
            }else{
                //输入的数据存在 $event.target中
                //输入的数据就是 $event.target.value
                // console.log($event.target.value);
                //创建正则
                var regex = new RegExp(this.rule)
                //验证输入数据是否符合正则 并把结果存起来
                this.isOk = regex.test($event.target.value)
            }
            //如果验证不通过 就要提示用户 错误信息
            if(!this.isOk){
                console.log(this.err_message);
            }
            // console.log(this.isOk);
            //每次输入都要把数据传给父组件
            this.$emit('input',$event.target.value)
            
        },
        //失去焦点的时候判断是否符合正则
        handleBlur(){
            if(!this.isOk){
                //用vant的提示弹框
                this.$toast.fail(this.err_message)
            }
        }
    }
}
</script>

<style lang="less" scoped>
input{
    width: 100%;
    height: 10.556vw;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    border:none;
    border-bottom: 1px #666 solid ;
    outline: none;
}
.err{
    border-bottom: 1px solid red;
}
</style>