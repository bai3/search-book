<template>
  <div>

  </div>
</template>
<script>
  export default {
    data() {
      let info
      return {
        info
      }
    },
    created: function () {
      this.$http("https://api.douban.com/v2/book/"+$route.params.id)
        .then(res => {
        })
    }
  }

</script>
