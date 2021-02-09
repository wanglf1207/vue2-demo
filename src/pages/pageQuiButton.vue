<template>
  <div id="pageQuiButton">
    <!--使用-->
    <qui-btn msg="you can click me" class="small" v-on="click"></qui-btn>
  </div>
</template>
<script>
  import quiBtn from '../components/quiButton.vue' /* 引用 */
  export default {
    name: 'pageQuiButton',
    components: {
      'qui-btn': quiBtn /* 注册自定义标签 */
    }
  }
</script>