<template>
    <el-row>
      <el-col :span="6">
        <leftmenu></leftmenu>
      </el-col>
      <el-col :span="18">
          <el-container>
            <el-header height="130px">
              <toptoolbar></toptoolbar>
            </el-header>
            <el-main>
              <centertable></centertable>
            </el-main>
            <el-footer height="300px">
              <foottab></foottab>
            </el-footer>
          </el-container>
      </el-col>
    </el-row>
</template>

<script>
import leftmenu from '@/components/leftmenu'
import toptoolbar from '@/components/toptoolbar'
import centertable from '@/components/centertable'
import foottab from '@/components/foottab'
export default {
  name: 'home',
  data () {
    return {
      msg: 'home'
    }
  },
  components:{
    leftmenu,
    toptoolbar,
    centertable,
    foottab
  },
  created(){
    let that=this;
    window.setTimeout(function(){
      //that.$router.push('login');
    },5000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin: 0;
  padding: 0;
  font-size: 12px;
}
.el-row{
  height: 100%;
}
.el-row .el-col{
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-aside{
  width: 20%;
}
.el-header{
  height: 200px;
}
.el-footer{
  height: 200px;
}
</style>
