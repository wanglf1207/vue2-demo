<!-- 计数器组件 -->
<style scoped>
/* 书写样式的地方 */
</style>

<!-- 书写标签的地方-->
<template>
    <div>
        <h1>{{count}}</h1>
        <button @click="add">点击我加上1</button>
    </div>
</template>

<!--书写js的地方-->
<script>
// export是es6写法，作用是对外暴露组件
// 此处不需要再写el绑定了，框架自动绑定了
export default {
    data() {
        return {
            count: 1
        }
    },
    methods: {
        add() {
            this.count++;
        }
    }
}
</script>