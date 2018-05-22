<template>
  <div class="saleAchieve">
    <div class="sale">
      <div class="sale-tit">
          <img src="../../../assets/list/top.png" style="width:3.27rem;height:0.06rem;"alt="">
           <h2>销售达成查询</h2>
      </div>
      <ul>
          <li v-for="list in saleDate" :key="list.id">
            <span>{{list.name}}</span>
            <img :src="'http://139.199.115.100:8082/'+ list.iconUrl" alt="">
          </li>
       </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'saleAchieve',
  components: {
   
  },
  data(){
    return{
     
    }
  },
  props:['saleDate']
}
</script>

<style scoped lang="stylus">
  .sale
    width 100%
    height 3.13rem
    background #fff
    margin-top 0.19rem
    position relative
  .sale .sale-tit
    width 100%
    height 1.2rem
  .sale .sale-tit img
    position absolute
    left 2.08rem
    top 0.6rem
  .sale .sale-tit h2
    font-size 0.3rem
    font-weight 600
    line-height 1.2rem
    width 100%
    height 1.2rem
    margin 0 auto
    text-align center
  .sale ul
    width 100%
    min-height 1.77rem
    display flex
    flex-direction row
    justify-content center
    position relative
  .sale ul li 
    width 30%
    height 1.77rem
    border-radius 0.1rem
    position relative
  .sale ul li:nth-child(2)
    margin-left 0.1rem
    margin-right 0.1rem
  .sale ul li img
    display block
    width 100%
    height 100%
  .sale ul li span
    position absolute
    top 0.6rem
    left 0.3rem
    width 1.65rem
    height 0.53rem
    background #696969
    border-radius 0.5rem
    line-height 0.53rem
    color #fff
    font-size 0.24rem
    text-align center
    opacity 0.8
 </style>

