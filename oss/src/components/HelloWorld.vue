<template>
  <div>
    <h5>{{ $t("message.hello")}}</h5>
    <el-button>{{ msg }}</el-button>
    <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
