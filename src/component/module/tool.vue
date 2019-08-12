<template>
	<div >
	<div class="box">
          <div class="logobox"><a><img src="../../../dist/img/icons/apple-touch-icon-60x60.png" class="logo"/><span>课程表</span></a></div>
		     <div class="logobox"><a> <img src="../../../dist/img/icons/apple-touch-icon-60x60.png" class="logo"/><span>成绩查询</span></a></div>
			    <div class="logobox"><a> <img src="../../../dist/img/icons/apple-touch-icon-60x60.png"class="logo"/><span>校园头条</span></a></div>
				   <div class="logobox"><a href="more.vue"><img src="../../../dist/img/icons/apple-touch-icon-60x60.png" class="logo"/> <span>更多</span></a></div>				   
	   </div>
	 

</div>


</template>

<script >

export default{
	el:'#tool',
	data:{
		show:true	
	},
	methods:{
		showCont:function(){
			this.show = !this.show;
		}
	}
	
} /* 显示更多*/


	
</script>

<style>
#tool{
  
    margin-top: 15px;
	margin-bottom: 15px;
	padding: 15px;
	height: 35px;
	background-color:#F8F8F8;
     overflow: auto;
	  display: flex;
	  flex-wrap:wrap;
	  flex-direction:row;
	  justify-content:center;
	  background-color: white;
	 border-radius:15px;
	
}
.logo{
    height:75%;
	width: 100%;
	padding: 0;
    margin: 0;
}
.logotitle{
	font-size: 8px;
    margin-top: 0;
	margin-bottom: 0;

}
#hidetool{
			
				margin-top: 15px;
				margin-bottom: 15px;
				padding: 15px;
				height: 85px;
				background-color:#F8F8F8;
                display: flex;
				
			}

.box{
	 margin-top: 15px;
	 margin-bottom: 15px;
	 height: 85px;
	 background-color: white;
	 border-radius:15px;
	 text-align: center;
            }
.logobox{
	width: 60px;
	height: 60px;
	text-align: center;
	display: inline-block;
	font-size: 12px;
	margin: 10px;
}
a:link,a:visited{color:#323233;}
</style>
