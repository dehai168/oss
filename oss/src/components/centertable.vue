<template>
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="文件名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="大小">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间"
        width="180">
      </el-table-column>
    </el-table>
</template>
<script>
     export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: ' 1518 kb'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: ' 1518 kb'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: ' 1518 kb'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: ' 1518 kb'
          }]
        }
      }
    } 
</script>