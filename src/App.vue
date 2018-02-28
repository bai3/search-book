<template>
  <div id="app">
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="24" center="true">
              
              <el-autocomplete
                placeholder="书名、作者、ISBN"
                prefix-icon="el-icon-search"
                v-model="key"
              >
              </el-autocomplete>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view>

          </router-view>
        </el-main>
        
      </el-container>
  </div>
</template>
<script>
import index from './components/index'
import tag from './components/tag'
import subject from './components/subject'
import top250 from './components/top250'
export default {
  /* eslint-disable */
  name: 'app',
  components: {
    index,
    subject,
    tag,
    top250
  }
 
}
</script>
<style lang="less">
body{
  margin: 0;
  #app {
  font-family: "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
  .el-header{
    background-color: #edf4ed;
    padding: 10px 20px;
    .router-link{
      font-weight: bold;
      margin-right:10px;
    }
  }
}

</style>
