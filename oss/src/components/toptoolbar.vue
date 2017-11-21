<template>
<div style="margin-top:25px;">
    <div style="width:100%;height:50px;">
        <div style="width:20%;float:left;margin-top:10px;"><el-button type="primary" icon="el-icon-arrow-left"  size="mini"></el-button><el-button type="primary" icon="el-icon-arrow-right"  size="mini"></el-button></div>
        <div style="width:80%;float:right;">
            <el-input placeholder="请输入搜索关键字" suffix-icon="el-icon-search"></el-input>
        </div>
    </div>
    <div style="width:100%;height:47px;padding-top:5px;border-top:1px solid #E6EBF5;border-bottom:1px solid #E6EBF5;">
       <el-button-group>
        <el-button type="primary">上传</el-button>
        <el-button type="primary">新建文件夹</el-button>
       </el-button-group>
       <el-button-group>
        <el-button type="primary" icon="el-icon-edit">下载</el-button>
        <el-button type="primary" icon="el-icon-share">复制</el-button>
        <el-button type="primary" icon="el-icon-delete">删除</el-button>
        </el-button-group> 
        <el-button-group>
        <el-button type="primary">获取地址</el-button>
        <el-button type="primary">设置HTTP头</el-button>
       </el-button-group>
       <el-button-group>
        <el-button type="primary">RAM授权</el-button>
       </el-button-group>
    </div>
</div>  
</template>
<script>
    export default {
        name:'toptoolbar',
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
.el-header{
    padding:5px;
}
</style>
