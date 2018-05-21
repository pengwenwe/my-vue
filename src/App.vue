<template>
  <!-- 需要缓存的不写noNeedKeep,不需要缓存的写noNeedKeep==true即可 -->
  <div id="app">
    <!-- <router-view v-if="$route.meta.noNeedKeep"></router-view> -->
    <keep-alive>
      <router-view></router-view>
      <!-- <router-view v-if='$route.meta.noNeedKeep==undefined'></router-view> -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  body
    background #f5f4f4
  #app
    width 100%
    height 100%
  .yuanquan
    position absolute !important
    bottom 44px !important
  .vux-icon-dot
    width 15px !important
    height 4px !important
    border-radius 0  !important
    background-color #fff !important
  .vux-icon-dot.active 
    background-color #0042ac !important
  .vux-header
    background-color #fff !important
  .vux-header-title
    color #000 !important
    font-size 0.45rem !important
  .left-arrow:before
    border 1px solid #1c469d !important
    border-width .04rem 0 0 .04rem !important
  .weui-grids 
    background #fff
    height 3.18rem
    padding-left 2.5%
  .weui-grids:before
    border-top 0 !important
  .weui-grid:before:nth-child(4)
    border-right 0!important
</style>
