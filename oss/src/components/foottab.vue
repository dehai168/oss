<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="上传队列(1/1)" name="first">上传队列</el-tab-pane>
    <el-tab-pane label="下载队列" name="second">下载队列</el-tab-pane>
    <el-tab-pane label="错误日志" name="third">错误日志</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>