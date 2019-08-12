<template>
	<div>		 
	  	<div class="card" >
	  	<h3 class="top">{{title}}</h3>
	  	<p class="content">{{content}}</p>
	  	<div class="more"><a href="">&nbsp;查看详情</a></div>
	  	<p class="timeshow">{{time}}</p>
	  </div>
	</div>
</template>

<script>

	export default{


		props:{
			 editable: {
                 type: Boolean,
                 default: false
            },
			title:{
				type:String,
				default:'-'
			},
			content:{
				type:String,
				default:'------'
			},
			time:{
				type:String,
				default:'xxxx-xx-xx xx:xx:xx'
			},
			conurl:{
				type:String,
				default:'#'
			}
	        
		},
		
	}
</script>

<style>
	.card{
		 border-top: 1px solid rgba(5,5,5,0.2);
		border-bottom: 1px solid rgba(5,5,5,0.2);
		border-left: 1px solid rgba(5,5,5,0.2); 
		border-right: 1px solid rgba(5,5,5,0.2);
		margin-left: 15px;
		margin-right: 15px;
		margin-top: 5px;
		font-size: 13px;
		 border-radius:15px;
	}
	.more{
		text-align: right;
		margin-right: 15px;
	}
	.timeshow{
		text-align: right;
		margin-right: 15px;
	}
	.content{
		margin-left: 15px;
		text-indent:2em; 
		text-align: left;
	}
	.top{
		margin-left: 15px;
	}
	 .menu { 
	    font:12px verdana, arial, sans-serif; /* 设置文字大小和字体样式 */
	    width: 100%;
	}
</style>
