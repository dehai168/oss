<template>
    <el-container>
        <el-header height="180px">
            <div style="height:80px;text-align:center;">
                <h3>OSS</h3>
            </div>
            <el-button-group>
                <el-button type="primary">新建</el-button>
                <el-button type="primary">设置</el-button>
                <el-button type="primary">刷新</el-button>
          </el-button-group>
        </el-header>
        <el-main>
            <ul><li>aaaaa</li><li>bbbbb</li></ul>
        </el-main>
        <el-footer>
            <foottab></foottab>
        </el-footer>
    </el-container>
</template>
<script>
    export default {
        name:'leftmenu',
        data(){
            return {

            };
        }
    }
</script>
<style scoped>
.el-container{
    background-color:#2D2F33;
    color:#fff;
    height: 100%;
}
.el-header{
    text-align: center;
}
ul{
    list-style: none;
}
ul li{
    line-height: 38px;
}
ul li:hover{
    background-color: #111;
    cursor:pointer;
}
</style>
