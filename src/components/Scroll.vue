<template>
  <div id="scroller" ref='wrapper'>
  	<div>
  		<slot></slot>
  	</div>
  </div>
</template>

<script>
import Vue from 'vue'
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  mounted(){
  	setTimeout(()=>{
  		this.scroll=new BScroll(this.$refs.wrapper,{
  			click:true
  		})
  	},20)
  },
}
</script>

<style scoped lang='stylus'>
	#scroller
	   	touch-action none
	    position fixed
	    top 1rem
	    bottom: 0rem
	    width: 100%
	    overflow: hidden
	    background-color: #fff
</style>