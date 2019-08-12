<template>
    <div >
		<Menu></Menu>
		<div >
  <MessageCard v-for="itme in detail"
	   :editable="true"
	   :title="detail.title"
	   :content="detail.content"
	   :time="detail.time"
	 >
	 </MessageCard> 
	 </div>
    </div>
</template>
<script>
import Menu from "../../component/module/Menu.vue"
import MessageCard from "../../component/module/MessageCard.vue"
export default {
	 components: {
	  MessageCard,
	  Menu
	},
    data() {
        return {
            detail:{
				title:"系统通知",
				content:"【亲苍霞】亲爱的同学,您的三个文明量化考评分发生变化!",
				time:"2019-07-14 18:03:27"
			}
        }
    }    
}
</script>
<style>
.mes{
	padding-top: 30px;
}
</style>

