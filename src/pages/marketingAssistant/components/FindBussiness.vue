<template>
  <div class="findBussiness">
     <div class="find-con">
       <div class="bussiness-query">
          <h2>业务查询</h2>
          <h3>数据快速查看</h3>
          <img src="../../../assets/list/bus.png" alt="">
       </div>
       <ul class="sale-query">
         <li v-for="(busDate,index) in findDate" :key="busDate.id" v-if="index<2">
           <h2>{{busDate.name}}</h2>
           <img :src="'http://139.199.115.100:8082/'+ busDate.iconUrl" alt="">
         </li>
       </ul>
       <div class="bottom-query">
          <div class="query-left">
            <h2>产品<br>退货查询</h2>
            <img src="../../../assets/list/product.png" alt="">
          </div>
          <div class="query-right">
            <h2>消费者<br>退货查询</h2>
            <img src="../../../assets/list/people.png" alt="">
          </div>
       </div>
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
      },
      props:['findDate']
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
    border-radius .4rem
    text-align center
    line-height 0.54rem
    font-weight normal
    font-size 0.28rem
    margin-top 0.54rem
    margin-left 0.22rem
    display inline-block
    float left
  .find-con .sale-query li img
    width 1.26rem
    height 1.25rem
    margin-left 0.1rem
    margin-top 0.2rem
  .find-con .sale-query li:nth-child(1) h2
    border 0.03rem solid #efa954
    color #efa954
  .find-con .sale-query li:nth-child(2) h2
    border 0.03rem solid #609dcb
    color #609dcb
  .bottom-query
    width 100%
    height 1.6rem
    float left
  .bottom-query .query-left
    width 49.7%
    height 1.6rem
    float left
    border-right 1px solid #d8d8d8
  .bottom-query .query-left img
    width 1.13rem
    height 1.22rem
    padding-top 0.17rem
  .bottom-query>div h2
    width 1.92rem
    height 0.92rem
    border-radius .5rem
    text-align center
    font-weight normal
    font-size 0.3rem
    float left
    margin-top 0.35rem
  .bottom-query .query-right
    width 50%
    hrgiht 1.6rem 
    float left
  .bottom-query .query-right img
    width 1.35rem
    height 1.22rem
    padding-top 0.17rem
  .bottom-query>div:nth-child(1) h2
    border .03rem solid #ff9494
    color #ff9494
    margin-left 0.3rem
    margin-right 0.15rem
  .bottom-query>div:nth-child(2) h2
    border 0.03rem solid #83a966
    color #83a966
    margin-left 0.2rem
    margin-right 0.1rem
</style>