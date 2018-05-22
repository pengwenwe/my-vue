<template>
  <div class="saleAchieve">
    <img src="../../../assets/list/top.png" style="width:3.27rem;height:0.06rem;"alt="">
    <h2>销售达成查询</h2>
     <ul>
      <li>
        <img src="../../../assets/list/fh.png" alt="">
      </li>
       <li>
        <img src="../../../assets/list/fh.png" alt="">
      </li>
       <li>
        <img src="../../../assets/list/fh.png" alt="">
      </li>
     </ul>
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
  created() {
    
  }
}
</script>

<style scoped lang="stylus">
  .saleAchieve 
    width 100%
    height 3.13rem
    background #fff
    margin-top 0.19rem
    position relative
    display flex
  .saleAchieve img
    position absolute
    left 2.08rem
    top 0.6rem
  .saleAchieve h2
    margin 0.37rem auto 0
    font-size 0.3rem
    font-weight 600
  .saleAchieve ul li 
    width 30%
    height 1.77rem
    flex-direction row
  .saleAchieve ul li img
    width 30%
    height 1.77rem
  </style>

