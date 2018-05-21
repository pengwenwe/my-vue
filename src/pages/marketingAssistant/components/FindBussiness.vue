<template>
  <div class="findBussiness">
     <div class="find-con">
       <div class="bussiness-query">
          <h2>业务查询</h2>
          <h3>数据快速查看</h3>
          <img src="" alt="">
       </div>
       <ul class="sale-query">
         <li>
           <h2>销售单查询</h2>
           <img src="" alt="">
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
import http from '../../../api/base.js'
  export default {
    name: 'FindBussiness',
    components: {
     
    },
    data(){
      return{
       
      }
    }  
  }
</script>

<style scoped lang="stylus">
  .find-con
    width 100%
    height 4.9rem
    background #fff
    border-top 1px solid #d8d8d8
    border-bottom 1px solid #d8d8d8
    margin-top 0.2rem
  .find-con .bussiness-query
    width 49.7%
    height 3.23rem
    border-bottom 1px solid #d8d8d8
    border-right 1px solid #d8d8d8
    text-align center
    float left
  .find-con .bussiness-query h2
    font-size 0.27rem
    padding-top 0.38rem
    font-weight normal
  .find-con .bussiness-query h3
    color #b3b3b3
    font-size 0.22rem
    padding-top 0.14rem
    font-weight normal
  .find-con .bussiness-query img
    width 2.48rem
    height 1.76rem
  .find-con .sale-query
    float left
    width 50%
  .find-con .sale-query li
    height 1.6rem
    border-bottom 1px solid #d8d8d8
  .find-con .sale-query li h2
    width 1.9rem
    height 0.54rem
    border 3px solid #efa954
    border-radius .4rem
    text-align center
    line-height 0.54rem
    font-weight normal
    font-size 0.28rem
    color #efa954
    margin-top 0.54rem
    margin-left 0.22rem
    display inline-block
</style>