<template>
  <div class="consumerCare">
    <div class="consumer">
      <div class="consumer-tit">
        <img src="../../../assets/list/top.png" style="width:3.27rem;height:0.06rem;" alt="">
        <h2>消费者关怀</h2>
        <p>更多 ></p>
      </div>
      <div class="wrapper" ref="consumerBox">
        <div class="content" ref="content">
          <ul style="width:100%;height:100%;" ref="tabitem">
            <li v-for="list in consumerDate" :key="list.id" ref='liSize'>
              <img :src="baseURL+list.iconUrl" alt="">
              <span>{{list.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const liWidth = 90
  import {
    Swiper,
    SwiperItem
  } from 'vux'
  import BScroll from 'better-scroll'
  import {baseURL} from '../../../api/url.js'
  import {
    setTimeout
  } from 'timers';
  export default {
    name: 'consumerCare',
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        baseURL:baseURL
      }
    },
    computed: {
      consumerDate() {
        return this.$store.state.market.consumerDate
      }
    },
    mounted() {
      setTimeout(() => {
        if (this.$refs.consumerBox) {
          this.scroll = new BScroll(this.$refs.consumerBox, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
          })
        }
        let width = 0
        let length = this.consumerDate.length
        if (this.$refs.tabitem) {
          let ulWidth = this.$refs.tabitem.clientWidth
          this.$refs.content.style.width = (ulWidth+55) + 'px'
          
        }
      }, 20)
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
  .wrapper
    touch-action none
    // position fixed
    bottom 0
    width 7.5rem
    height 1.12rem
    position absolute
    overflow hidden
  .wrapper .content 
    height 1.12rem
  .wrapper .content li
    width 1.69rem
    height 1.12rem
    border-right 1px solid #ccc
    text-align center
    float left
  .wrapper .content li img 
     width .5rem
     height 0.55rem
     margin 0.1rem auto
     display block 
  .wrapper .content li span 
     display block 
     color #000
</style>
