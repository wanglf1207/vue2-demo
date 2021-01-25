<template>
  <div id="app">
    <h1 class="page-title"><a href="#/">开发组件库</a></h1>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<!-- scoped关键字表示这个样式是私有的 --> 
<style scoped>
 @import './assets/css/App.css';
</style>
