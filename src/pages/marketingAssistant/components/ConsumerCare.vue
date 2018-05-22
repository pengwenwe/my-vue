<template>
  <div class="consumerCare">
     <div class="consumer">
        <div class="consumer-tit">
            <img src="../../../assets/list/top.png" style="width:3.27rem;height:0.06rem;"alt="">
            <h2>消费者关怀</h2>
            <p>更多 ></p>
        </div>
        <swiper height="55.5px" show-dots="false">
            <swiper-item class="swiper">
              <img src="../../../assets/list/more.png" alt="">
            </swiper-item>
            <swiper-item>
              <img src="../../../assets/list/more.png" alt="">
            </swiper-item>
            <swiper-item>
              <img src="../../../assets/list/more.png" alt="">
            </swiper-item>
            <swiper-item>
              <img src="../../../assets/list/more.png" alt="">
            </swiper-item>
            <swiper-item>
              <img src="../../../assets/list/more.png" alt="">
            </swiper-item>
        </swiper>
     </div>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'vux'
export default {
  name: 'consumerCare',
  components: {
   Swiper,
   SwiperItem
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
  .consumer 
    width 100%
    height 2.7rem
    background #fff
    margin-top 0.22rem
    position relative
  .consumer .consumer-tit
    width 100%
    height 1.2rem
    position relative
  .consumer .consumer-tit img
    position absolute
    left 2.08rem
    top 0.6rem
  .consumer .consumer-tit h2
    font-size 0.3rem
    font-weight 600
    line-height 1.2rem
    width 100%
    height 1.2rem
    margin 0 auto
    text-align center
  .consumer .consumer-tit p
    position absolute
    right 0.28rem
    top 0.37rem
    font-size 0.24rem
  .swiper
    width 1.66rem
</style>
