<template>
<div class="panel">
	<div>
	<tool></tool>
	<Personal
	:name="detail.name"
	:messagesum="detail.messagesum"
	:rank="detail.rank"
	:score="detail.score"></Personal>
	<Tab></Tab>
	</div>
	</div>	
</template>
<script>

import tool from "../../component/module/tool.vue"
import Personal from "../../component/module/Personal.vue"
import Tab from "../../component/module/Tab.vue"
export default {
	 components: {
	  tool,
	  Personal,
	  Tab
	},
    data() {
        return {
        detail:{
            name:" 张三",
			messagesum:3,
			score:100,
			rank:1
        },
	
			}
        }
    }    

</script>
<style lang="less" scoped>
.panel {
  height: 85vh;
  display: flex;
   flex-direction:row;
  justify-content: center;
  background-color: #F0F0F0;
  p {
    margin: 0 auto;
	color: darkgray;
    font-size: 16px;
  }
}

</style>

