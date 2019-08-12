<template>
    <van-tabbar v-model="bar.active">
        <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="chat-o" :info="bar.info" to="/message">消息</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
export default {
    data() {
        return {
            bar: {
                active: 0,
                info: 0
            }
        }
    },

    created() {

    },

    mounted() {

    },

    destroyed() {

    },

    watch: {

    },

    methods:{

    }
}
</script>
<style>
</style>
