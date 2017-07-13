<template>
  <div id="secondcomp">
    <h2>路由页面2</h2>
      Element-UI 测试 by:{{author2}}
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
        </div>
        <div v-for="article in articles" class="text item">
          第{{article.data}}名：{{article.film}}
        </div>
      </el-card>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      author2: 'daioq2',
      articles: []
    }
  },
  mounted: function() {    //ready
    this.articles = [{data:1,film:"肖申克的救赎"} ,{data:2,film:"霸王别姬"} ,{data:3,film:"这个杀手不太冷"} ,{data:4,film:"美丽人生"} ,{data:5,film:"阿甘正传"}
                    ,{data:6,film:"千与千寻"} ,{data:7,film:"辛德勒的名单"} ,{data:8,film:"泰坦尼克号"} ,{data:9,film:"盗梦空间"}]
  }
}
</script>

<style>
.text{
  text-align: left;
  margin-bottom: 6px;
  /*font-weight: bold;*/
  font-family: "微软雅黑"
}
.box-card {
    width: 280px;
    margin: 10px auto;
  }
</style>