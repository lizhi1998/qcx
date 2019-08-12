<template>
    <van-row class="score-row">
        <van-col span="6">
            <p>{{increase}}</p>
            <p>加分项</p>
        </van-col>
        <van-col span="6">
            <p>{{decrease}}</p>
            <p>扣分项</p>
        </van-col>
        <van-col span="6">
            <p>{{score}}</p>
            <p>总积分</p>
        </van-col>
        <van-col span="6">
            <p>{{rank}}</p>
            <p>当前排位</p>
        </van-col>
    </van-row>    
</template>
<script>
export default {
    props: {
        increase: {
            type: Number,
            default: 0
        },
        decrease: {
            type: Number,
            default: 0
        },
        score: {
            type: Number,
            default: 0
        },
        rank: {
            type: Number,
            default: 0
        }
    }
}
</script>
<style scoped>
    .score-row {
        border-top: 1px solid rgba(5,5,5,0.2);
        border-bottom: 1px solid rgba(5,5,5,0.2);
        font-size: 14px;
        text-align: center;
    }

    .van-col {
        border-right: 0.5px solid rgba(5,5,5,0.2);
    }

    .van-col:last-child {
        border: none;
    }
</style>
