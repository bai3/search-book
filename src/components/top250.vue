<template>
    <div>
        <h3>
            豆瓣图书Top&nbsp;250
        </h3>
        <div class="block" style="float: left;padding-left:100px">
            <el-pagination
            layout="prev, pager, next"
            :total="100"
            @current-change="getlist">
            </el-pagination>
        </div>
    </div>

</template>
<script>
  export default {
    data() {
        let top250 = []
        let page = 1
        return {
            top250,
            page
        }
    },
    created: function() {
    this.$http("http://www.bai3.xyz/spride/api/top250?page="+this.page)
        .then(res => {
            this.top250 = res.data;
            console.log(this.top250)
        })
    },
    methods:{
        getlist: function(e){
            this.page = e
            this.$http("http://www.bai3.xyz/spride/api/top250?page="+ this.page)
            .then(res => {
            this.top250 = res.data;
            console.log(this.top250)
        })
        }
    }
  }
</script>
<style lang="less">
h3{
    text-align: left;
}
</style>
