<template>
  <div>
    <h3 >
      豆瓣图书Top&nbsp;250
    </h3>
    <div class="main" style="float:left">
      <ul>
        <li v-for="(item,key) in top250">
          <div class="pic">
            <img :src="item.fields.image_url" width="90px">
          </div>
          <div class="doc">
            <p>
              <a href="">{{item.fields.name}}</a>
            </p>
            <p>{{item.fields.detail}}</p>
            <p>
              <el-rate v-model="stars[key]" disabled show-score  text-color="#ff9900" :score-template="item.fields.star">
              </el-rate>({{item.fields.comment}}人评价)
            </p>
            <p>
                <&nbsp;{{item.fields.dictum}}&nbsp;>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="block" style="float: left;padding-left:100px">
      <el-pagination layout="prev, pager, next" :total="100" @current-change="getlist">
      </el-pagination>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      let top250, stars
      let page = 1
      return {
        top250,
        page,
        stars
      }
    },
    created: function () {
      this.$http("http://www.bai3.xyz/spider/api/top250?page=" + this.page)
        .then(res => {
          this.top250 = res.data;
          this.stars = []
          res.data.forEach(function(element) {
                this.stars.push(parseFloat(element.fields.star/2))
          }, this);
        })
    },
    methods: {
      getlist: function (e) {
        this.stars = []
        this.page = e
        this.$http("http://www.bai3.xyz/spider/api/top250?page=" + this.page)
          .then(res => {
            this.top250 = res.data;
            res.data.forEach(function(element) {
                this.stars.push(parseFloat(element.fields.star/2))
            }, this);
            scrollTo(0,0)
          })
      }
    }
  }

</script>
<style lang="less">
  h3 {
    text-align: left;
  }

  .main ul li {
    width: 600px;
    overflow: hidden;
    clear: both;
    margin-top: 15px;
  }

  .main img {
    float: left;
  }

  .main .doc {
    float: left;
    text-align: left;
    margin-left: 10px;
    margin-top: 20px;
    p {
      font: 13px Arial, Helvetica, sans-serif;
      line-height: 150%;
      color: #666666;
      margin: 0 0 5px 0;
      a {
        font-size: 14px;
      }
      .el-rate{
        display: inline-block;
        margin-right: 10px;
            .el-rate__icon {
                font-size: 11px;
                margin-right: 2px
            }
            .el-rate__text {
            font-size: 12px;
            } 
      }
        
    }
  }

</style>
