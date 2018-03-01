<template>
    <el-row>
        <el-col :span="16" id="carousel">
            <h2>新书速递</h2>
            <el-carousel indicator-position="outside" interval="5000"  v-loading="loading">
                <el-carousel-item v-for="item in 4" :key="item" >
                    <ul>
                        <li style="float: left" v-for="item2 in 10">
                            <div class="cover">
                                <el-tooltip  enterable="false" effect='light' content="Top center" placement="right" offset="1">
                                <div slot="content" >
                                    <h3 class="title" >
                                        啊！这样就能辞职了
                                    </h3>
                                    <p>
                                        <span class="author">
                                            [日] 安倍夜郎
                                        </span>
                                        /
                                        <span class="year">
                                            2018-2
                                        </span>
                                        /
                                        <span class="publisher">
                                            新星出版社
                                        </span>
                                    </p>
                                    <p class="abstract" >
                                    成为漫画家前，我是一家广告公司没人注意的导演。那时并不顺利，真说辞职，又不知道能做什么。开店之类的干不来，英语不会，也没考过驾照……唯一的乐趣就是画漫画。我只要一有空就画个不停，画着画着心想，也许可以辞职做一名职业漫画家吧。
                                    在公司工作的第十五年，我画了一百张四格漫画拿去投稿，心想获奖后就可以辞职了，不料根本没能入选。后来我又画了一百张三格...
                                    </p>
                                </div>
                                <a href="">
                                <img src="https://img3.doubanio.com/lpic/s29669694.jpg"width="92px" height="137px">
                                </a>
                                </el-tooltip>
                            </div>
                            <div class="name">
                                <a href="">这样就能辞职了</a>
                            </div>
                            <div class="writer">安培野狼</div>
                        </li>
                        

                    </ul>
                </el-carousel-item>
            </el-carousel>
        </el-col>
        <el-col :span="7" :push='1'id="tags">
        <h2>热门标签</h2>
        <div style="height:200px">2</div>
        <h2>豆瓣top250
            <router-link to="/top250">
            更多>>
            </router-link>
        </h2>
        <div style="height:200px">3</div>
       
        </el-col>  
    </el-row>
</template>
<script>
  export default {
  
  }
</script>
<style lang="less">
a{
    text-decoration: none
}
a:link, a:visited, a:focus {
    color: #3377aa;
}
 h2{
    font-size: 18px;
    text-align: left;
    font-weight: bold;
    padding-bottom: 3px;
    margin-bottom: 16px;
    border-bottom: 1px solid #ddd;
    a{
        font-size: 13px;
    }
} 
#carousel{
    height: auto; 
    .el-carousel__container{
        height: 400px;
    }
    ul{
        list-style: none;
        li{
            overflow: hidden;
            display: inline-block;
            vertical-align: top;
            font-size: 12px;
            margin: 0 25px 15px 0;
        }
    }
}
.abstract{
     width: 200px;
}
#tags{
    height: auto;
}
</style>
