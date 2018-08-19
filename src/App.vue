<template>
  <div id="app">
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="24" center="true">
              <router-link to="/index" id="title">
                小白搜书
              </router-link>
              <el-autocomplete
                placeholder="书名、作者、ISBN"
                prefix-icon="el-icon-search"
                :trigger-on-focus="false"
                :fetch-suggestions="querySearchAsync"
                @select="handleSelect"
                v-model="state4"
              >
              </el-autocomplete>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view>

          </router-view>
        </el-main>
        <el-footer>
          Copyright © By 白植熙
       </el-footer>
        
      </el-container>
  </div>
</template>
<script>
import index from './components/index'
import tags from './components/tags'
import subject from './components/subject'
import top250 from './components/top250'
export default {
  /* eslint-disable */
  data(){
    return{
      info: [],
      state4: '',
      timeout: null

    }
  },
  methods: {
    querySearchAsync(queryString, cb) {
      let url = 'https://api.douban.com/v2/book/search?q='+queryString+'&count=5';
      this.$jsonp(url,{})
      .then(res => {
          for(let i of res.books){
            i.value = i.title+' / '+i.author
          }
          this.info = res.books
          cb(this.info)
        })
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {

        this.$router.push({path: '/subject/'+item.id})
      }
  },
  name: 'app',
  components: {
    index,
    subject,
    tags,
    top250
  },

 
}
</script>
<style lang="less">
@media screen and (min-width: 980px) {
  #app{
    width: 960px;
    margin: 0 auto;
  }
}
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
    text-align: left;
    background-color: #edf4ed;
    padding: 10px 20px;
    .el-row{
      margin: 0 auto;
      overflow: visible !important;
    }
    #title{
      text-decoration: none;
      padding-right: 10px;
      font-family:"Microsoft Yahei";
      font-weight: bold;
      color: #7f8c8d
    }
  }
  .el-footer{
    background-color: #edf4ed;
    font-size: 16px;
    color: #7f8c8d;
    line-height: 60px;
  }
  .el-main{
    padding: 8px 0;
  }
}
ul, li{
  list-style: none;
  padding: 0
}
a {
    cursor: pointer
}

a:link {
    color: #37a;
    text-decoration: none
}

a:visited {
    color: #669;
    text-decoration: none
}

a:hover {
    color: #37a;
    text-decoration: none;
}

a:active {
    color: #fff;
    text-decoration: none;
    background: #f93
}


</style>
