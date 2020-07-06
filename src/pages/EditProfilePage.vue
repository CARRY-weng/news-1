<template>
  <div class="editprofile">
      <headerMiddle
      lable='编辑资料'
      @back='$router.push("/profile")'/>
      编辑资料页面
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
export default {
    components:{
        headerMiddle
    }
}
</script>

<style>

</style>