<template>
  <div id="pageQuiButton">
<<<<<<< HEAD
    <qui-btn v-on:btnClickEvent="doSth1" msg="确定" ></qui-btn>
    <qui-btn v-on:btnClickEvent="doSth2" msg="取消" ></qui-btn>
    <qui-btn msg="下载" class="with-icon">
      <img slot="icon" class="ico" src="../assets/btn-right.jpg" />
    </qui-btn>
=======
    <!--使用-->
    <qui-btn msg="you can click me" class="small" v-on="click"></qui-btn>
>>>>>>> 51e8bbfcc08fd26e0c1300e4df7abaef8bcb5509
  </div>
</template>
<script>
  import quiBtn from '../components/quiButton.vue' /* 引用 */
  export default {
    name: 'pageQuiButton',
    components: {
      'qui-btn': quiBtn /* 注册自定义标签 */
    },
    methods: {
      doSth1: function(){
        alert('111');
      },
      doSth2: function(){
        alert('222');
      }
    }
  }
</script>