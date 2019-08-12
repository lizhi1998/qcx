<template>
<div class="Tshow">
  <van-tabs v-model="activeName">
  <van-tab title="话题" name="a">

			 <div class="Tcard">
             <img src="../../../dist/img/icons/apple-touch-icon-120x120.png" class="imgshow" />
			 <span>新生入学必逛地点</span>
	  </div>
	  	 <div class="Tcard">
			
	   <img src="../../../dist/img/icons/apple-touch-icon-120x120.png" class="imgshow" />
	    <span>新生入学必逛地点</span>
	  </div>
	  	 <div class="Tcard">
	  
	  </div>
  </van-tab>
  <van-tab title="活动" name="b">内容 2
  </van-tab>
  <van-tab title="讲座" name="c">内容 3
  </van-tab>
  <van-tab title="公告" name="d">内容 3
  </van-tab>
  </van-tabs>
 </div>

</template>

<script>
</script>

<style>
	.Tshow{
		margin-top: 15px;
	}
    .Tcard{
		background-color: white;
		height: 130px;
		margin: 5px;
        padding: 0px;

	}
	.imgshow{
		width: 130px;
		height: 110px;
		margin: 15px;
	    text-align: center;
		float: left;
	}
    .imgshowo{
		width: 130px;
		height: 110px;
		margin: 15px;
	    text-align: center;
		float:left;
	}
	.imgshow img{
			display: block;
	}
    .showc{
		overflow: hidden;
	    padding: 0;
		margin: 0;
		
	}
	.pshow{
		font-size: 12px;
	}
</style>
