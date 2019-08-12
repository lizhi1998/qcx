<template>
  <div class="panel">
    <van-cell-group>
      <van-field
        v-model="loginForm.username"
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('如忘记密码，请联系辅导员')"
      />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="loginForm.password" label="密码" type="password" placeholder="请输入密码"/>
    </van-cell-group>
    <van-cell-group>
       <router-link :to="{name:'home'}"><van-button type="primary" @click="doLogin">登录</van-button></router-link>
    </van-cell-group>

  </div>
</template>
<script>
import * as loginApi from "../api/account.js";
import { logger } from "../util/util.js";
export default {
  data() {
    return {
      loginForm: {
        account: "",
        password: ""
      }
    };
  },

  methods: {
    /**
     * 登录请求
     */
    doLogin: function() {
      let result = loginApi.doLogin({
        account: this.loginForm.account,
        password: this.loginForm.password
      });

      result.then(res => {
        if (res.status) logger.info(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
@themeColor: #3a5fcd;

.panel {    
	
  margin: 15px;
  padding: 20px;
  
  .van-cell-group {
    margin: 25px 0;
  }

  .van-button {
    display: block;
    width: 100%;
    border-color: @themeColor;
    background-color: @themeColor;
  }
}
</style>

