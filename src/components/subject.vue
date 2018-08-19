<template>
  <div style="min-height:500px">
    <svg v-if="loading" class="loading" width="44px" height="44px" viewBox="0 0 44 44">
      <circle class="path" fill="none" stroke-width="4" stroke-linecap="round" cx="22" cy="22" r="20"></circle>
    </svg>
    <div v-if="!loading">
      <h1>
        <span>{{info.title}}</span>
      </h1>
      <div class="main">
        <div class="img" >
          <img :src="'https://images.weserv.nl/?url='+info.images.large.slice(8)" alt="图片" width="135px">
        </div>
        <div class="info">
          <p>作者：{{author}}</p>
          <p v-if="info.subtitle">副标题: {{info.subtitle}}</p>
          <p v-if="info.publisher">出版社：{{info.publisher}}</p>
          <p v-if="info.alt_title">原作名:{{info.alt_title}}</p>
          <p v-if="translator.length">译者：{{translator.join(',')}}</p>
          <p v-if="info.pubdate">出版年：{{info.pubdate}}</p>
          <p v-if="info.pages">页数：{{info.pages}}页</p>
          <p v-if="info.price">定价：{{info.price}}</p>
          <p v-if="info.binding">装帧：{{info.binding}}</p>
          <p v-if="info.series">丛书：{{info.series.title}}</p>
          <p v-if="info.isbn13">ISBN：{{info.isbn13}}</p>
        </div>
      </div>
      <div class="intro">
        <h2>内容简介&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
        </h2>
        <div class="text">
          {{info.summary}}
        </div>
        <h2 v-if="info.author_intro">作者简介&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
        </h2>
        <div class="text" v-if="info.author_intro">
          {{info.author_intro}}
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
  export default {
    data() {
      let info = []
      let author = []
      let translator = [];
      return {
        info,
        translator,
        author,
        loading: true,
      }
    },
    methods: {
      getinfo(){
        this.$jsonp('https://api.douban.com/v2/book/'+this.$route.params.id,{})
        .then(res => {
          this.info = res
          this.translator =  res.translator;
          this.author = res.author.join(',');  
          this.loading = false;   
      })
      },
      refresh(){
        this.loading = true;
        this.getinfo()
      }
    },
    created: function () {
      // this.$axios("/book/"+this.$route.params.id)
      //   .then(res => {
      //     this.info = res.data;
      //     this.translator =  res.data.translator;
      //     this.author = res.data.author.join(',');
      // })
      this.getinfo()
    },
    watch:{
      '$route': 'refresh'
    }
  }
</script>
<style lang="less">
h1{
  text-align: left;
  span{
    font-size: 26px;
    font-weight: bold;
    color: #494949;
  }
}
.main{
  clear: both;
  overflow: hidden;
}
.img{
float: left;
margin-right: 15px;
}
.info{
  float: left;
  p{
    margin: 0;
    font: 14px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666;
    text-align: left;
    
  };
}
.intro{
  width: 650px;
  margin-bottom: 20px;
  h2{
    text-align: left;
    font: 16px Arial, Helvetica, sans-serif;
    color: #072;
    margin: 20px 0 10px 0;
    line-height: 150%;
    border: none;
  }
  .text{
    text-align: left;
    font-size: 13px;
    color: #111;
    text-indent:2em;
  }
}
.loading {
        animation: rotator 1.4s linear infinite;
    }
    @keyframes rotator {
        0% {
            transform: scale(0.5) rotate(0deg);
        }
        100% {
            transform: scale(0.5) rotate(270deg);
        }
    }
    .loading .path {
        stroke: #009dd7;
        stroke-dasharray: 126;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: dash 1.4s ease-in-out infinite;
    }
    @keyframes dash {
        0% {
            stroke-dashoffset: 126;
        }
        50% {
            stroke-dashoffset: 63;
            transform: rotate(135deg);
        }
        100% {
            stroke-dashoffset: 126;
            transform: rotate(450deg);
        }
    }

</style>
