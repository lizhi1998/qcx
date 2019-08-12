<template>
  <div>
    <div class="profile-home">
      <div class="profile-avatar">
        <img src>
      </div>
      <score-row
        :increase="detail.increase"
        :decrease="detail.decrease"
        :score="detail.score"
        :rank="detail.rank"
      ></score-row>
    </div>
    <div class="profile-panel">
      <van-cell-group title="基本资料">
        <router-link :to="{name:'profileDetail',params:{id:1}}"><van-cell is-link="">个人信息</van-cell></router-link>
      </van-cell-group>
      <van-cell-group title="第三方账号">
        <van-cell
          v-for="item in options"
          :key="item.value"
          :title="item.title"
          :value="item.value"
          :center="false"
          is-link
          @click="$toast('第三方账号绑定功能将于后续开放，届时可直接通过第三方账号登录平台')"
        ></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
	
import ScoreRow from "@/component/module/ScoreRow.vue";

export default {
  components: {
    ScoreRow
  },
  data() {
    return {
      detail: {
        increase: 0,
        decrease: 0,
        score: 0,
        rank: 0
      },
      options: [
        {
          title: "微信号",
          value: "未绑定",
          to: ""
        },
        {
          title: "QQ号",
          value: "未绑定",
          to: ""
        },
        {
          title: "易班账号",
          value: "未绑定",
          to: ""
        }
      ]
    };
  }
};



</script>
<style scoped>
.profile-home {
  height: 200px;
}

.profile-avatar {
  height: 130px;
}

.profile-panel {
  margin: 10px 0;
}

.van-cell-group__title {
  padding: 15px !important;
}
</style>


