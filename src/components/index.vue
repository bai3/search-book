<template>
  <el-row>
    <el-col :span="16" id="carousel">
      <h2>新书速递</h2>
      <el-carousel indicator-position="outside" :interval="5000">
        <el-carousel-item v-for="item in latestbooks" :key="item.id">
          <ul style="float:left">
            <li v-for="item2 in item">
              <div class="cover">
                <el-tooltip effect='light' placement="right">
                  <div slot="content" class="detail" v-html="item2.detail">
                  </div>
                  <router-link :to="'/subject/'+item2.book_id" :title="item2.name">
                    <img :src="'https://images.weserv.nl/?url='+item2.image_url.slice(8)" width="92px" height="137px">
                  </router-link>
                </el-tooltip>
              </div>
              <div class="name">
                <router-link :to="'/subject/'+item2.book_id" :title="item2.name">
                  {{item2.name|wordlimit}}
                </router-link>
              </div>
              <div class="writer">
                {{item2.author|blank}}
              </div>
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="7" :push='1' id="tags">
      <h2>热门标签
        <router-link to="/tags">
          更多>>
        </router-link>
      </h2>
      <div style="height:200px" class="tags">
        <div class="tag">
          <h3>文学</h3>
          <ul class="clearfloat">
            <li v-for="item in wenxue">
              <router-link :to="'/tag/'+item.name">
              {{item.name}}
              </router-link>
            </li>
            <li>
              <router-link to="/tags/#文学" class="more">
              更多»
              </router-link>
            </li>
          </ul>
        </div>
        <div class="tag">
          <h3>流行</h3>
          <ul class="clearfloat">
            <li v-for="item in liuxing">
              <router-link :to="'/tag/'+item.name">
              {{item.name}}
              </router-link>
            </li>
            <li>
              <router-link to="/tags/#流行" class="more">
              更多»
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <h2>豆瓣top250
        <router-link to="/top250">
          更多>>
        </router-link>
      </h2>
      <div style="height:200px" id="top250">
        <ul >
          <li v-for="item in top250">
            <div class="cover">
                <router-link :to="'/subject/'+item.fields.book_id" :title="item.fi">
                    <img :src="item.fields.image_url" width="92px" height="137px">
                </router-link>
            </div>
            <div class="name">
                <router-link :to="'/subject/'+item.fields.book_id">
                {{item.fields.name|wordlimit}}
                </router-link>
            </div>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      let latestbooks = []
      let top250 = []
      let key = 0
      return {
        latestbooks,
        key,
        top250,
        loading: true,
        wenxue:[
          {name: '小说'},
          {name: '随笔'},
          {name: '日本文学'},
          {name: '散文'},
          {name: '诗歌'},
          {name: '童话'},
          {name: '名著'}
        ],
        liuxing:[
          {name: '漫画'},
          {name: '推理'},
          {name: '绘本'},
          {name: '青春'},
          {name: '科幻'},
          {name: '言情'},
          {name: '奇幻'}
        ],
      }
    },
    created: function () {
      this.$axios("http://www.bai3.xyz/api/getlatestbook/?format=json")
        .then(res => {
          for (var i = 0; i < 40; i += 10) {
            this.latestbooks.push(res.data.slice(i, i + 10));
          }
        });
        this.$axios("http://www.bai3.xyz/spider/api/top250?page=1")
        .then(res => {
            this.top250 = res.data.slice(0,2)
        })
    },
    filters: {
      wordlimit: function (word) {
        if (word.length <= 6) {
          return word
        } else {
          return word.slice(0, 4) + '...'
        }
      },
      blank: function (word) {
        word = word.replace(/(^\s*)|(\s*$)/g, "");
        if (word.length <= 7) {
          return word
        } else {
          return word.slice(0, 7) + '...'
        }
      }
    }
  }

</script>
<style lang="less">
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0} 
.clearfloat{zoom:1} 
  a {
    text-decoration: none
  }

  a:link,
  a:visited,
  a:focus {
    color: #3377aa;
  }

  h2 {
    font-size: 18px;
    text-align: left;
    font-weight: bold;
    padding-bottom: 3px;
    margin-bottom: 16px;
    border-bottom: 1px solid #ddd;
    a {
      font-size: 13px;
    }
  }

  #carousel {
    height: auto;
    .el-carousel__container {
      height: 400px;
    }
    ul {
      list-style: none;
      li {
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        margin: 0 25px 15px 0;
        &:nth-child(5n+1){
          margin-left: 25px;
        }
      }
    }
  }

  #tags {
    height: auto;
  }

  .detail {
    width: 200px;
    h4 {
      font: 15px Arial, Helvetica, sans-serif;
      color: #666;
      font-weight: bold
    }
  }

  #top250 {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;
      li {
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        margin: 0 25px 15px 0;

      }
    }
  }
.tag{
  h3{
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 0px;
  }
  ul{
    margin-top: 6px;
    li{
      float: left;
      a{
        width: auto;
        word-break: keep-all;
        white-space: nowrap;
        background-color: #f5f5f5;
        color: #37A;
        font-size: 13px;
        padding: 2px 11px 0;
        display: inline-block;
        margin: 0 3px 5px 0;
        line-height: 20px;
      }
      .more{
        color: #aaa;
      }
    }
  }

}
</style>
