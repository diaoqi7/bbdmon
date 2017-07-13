<template>
  <div id="app">
    <h2 class="headapp">{{msg}}</h2>
    <ul class="headapp">
      <li><router-link to="/first">第一页</router-link></li>
      <li><router-link to="/second">第二页</router-link></li>
      <li><router-link to="/third">第三页</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue webpack Element-UI single page App'
    }
  }
}
</script>

<style>









.headapp{
  text-align:center;
}
</style>
