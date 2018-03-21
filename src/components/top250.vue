<template>
  <div>
    <h3 >
      豆瓣图书Top&nbsp;250
    </h3>
    <div style="height:500px" v-if="loading">
        <i class="el-icon-loading"></i>
    </div>
    <div class="main" style="float:left" v-if="!loading">
      <ul>
        <li v-for="(item,key) in top250">
          <div class="pic">
            <router-link :to="'/subject/'+item.fields.book_id" :title="item.fields.name">
            <img :src="item.fields.image_url" width="90px">
            </router-link>
          </div>
          <div class="doc">
            <p>
              <router-link :to="'/subject/'+item.fields.book_id" :title="item.fields.name">
              {{item.fields.name}}
              </router-link>
            </p>
            <p>{{item.fields.detail}}</p>
            <p>
              <el-rate v-model="stars[key]" disabled show-score  text-color="#ff9900" :score-template="item.fields.star">
              </el-rate>({{item.fields.comment}}人评价)
            </p>
            <p v-if="item.fields.dictum != '无'">
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
        stars,
        loading: true,
      }
    },
    created: function () {
      this.$axios("http://www.bai3.xyz/spider/api/top250?page=" + this.page)
        .then(res => {
          this.top250 = res.data;
          this.stars = []
          res.data.forEach(function(element) {
                this.stars.push(parseFloat(element.fields.star/2))
          }, this);
          this.loading = false;
        })
    },
    methods: {
      getlist: function (e) {
        this.stars = [];
        this.page = e;
        this.loading = true;
        this.$axios("http://www.bai3.xyz/spider/api/top250?page=" + this.page)
          .then(res => {
            this.top250 = res.data;
            res.data.forEach(function(element) {
                this.stars.push(parseFloat(element.fields.star/2))
            }, this);
            this.loading = false
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
    padding-bottom: 15px;
    border-bottom: 1px #ddd dashed;
    &:last-child{
      border-bottom: none;
    }
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
