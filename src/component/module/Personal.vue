<template>
	<div class="PershowCard">
		<div class="Pshow">
			<img src="../../../public/img/icons/apple-touch-icon-76x76.png" width="100%" height="75%">
		</div>   	
		<div class="titleCard">
			<p>{{name}}</p>
	        <ul>
	        <li  class="inCard"><a><p>消息  {{messagesum}}</p></a></li>
	        <li  class="inCard"><a><p>积分  {{score}}</p></a></li>
	        <li  class="inCard"><a><p>排位  {{rank}}</p></a></li>
	        </ul>
		</div>
	</div>
</template>

<script>
	export default {
	    props: {
	        name: {
	            type: String,
	            default: 0
	        },
	        messagesum: {
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

<style>
	.PershowCard{
		 display: flex;
		 flex-direction:row;
		 background-color: white;
		 border-radius:15px;
	}
	.Pshow{
		width: 80px;
		height: 100px;
	    margin-left: 25px;
		margin-right: 15px;
		margin-top: 15px;
		margin-bottom: 0;
		text-align:center;
	}
	.titleCard{
		margin: 0;
		padding: 0;
	}
	.inCard{
		display: inline-block;
		margin-right: 30px;
	
	}
</style>
