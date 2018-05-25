<template>
  <div class="home">
    <div style="overflow: scroll;position:absolute;top:0;bottom:1rem;">
      <swiper auto class="swiper" height="264.5px" dots-position="center" dots-class="yuanquan">
        <swiper-item v-for="list in adsList" :key="list.id">
          <img class="ban-img" :src="list.imgUrl" alt="">
        </swiper-item>
      </swiper>
      <div class="num">
          <div class="num-left">
            <img src="../../assets/home/index.png" alt="">
            <p class="more">超出指标<br><span>{{saleCountMap.out}}</span></p>
          </div>
          <div class="num-center">
            <p>本月指标{{saleCountMap.target}}大罐</p>
            <p >已完成{{saleCountMap.act}}大罐</p>
          </div>
          <div class="num-right">
            <p>总销售扫码率{{saoRateMap.saoma}}</p>
            <p>绩效产品扫码率{{saoRateMap.saoma_point}}</p>
          </div>
      </div>
      <div class="news">
        <p class="news-img">
          <img style="width:47px;height:31px;"src="../../assets/home/logo.png" alt="">
        </p>
        <swiper auto height="33px" direction="vertical" :interval=2000 class="text-scroll news-swiper" :show-dots="false">
          <swiper-item v-for="item in newDate" :key="item.id" @click.native = 'handleDetailClick(item.id)'>
            <p class="news-tit">{{item.title}}</p>
            <span class="news-con">{{item.content}}</span>
          </swiper-item>
        </swiper>
        <badge class="news-msg"></badge>
        <x-icon type="ios-arrow-right" class="news-icon" size="22"></x-icon>
      </div>
      <div class="power">
          <div class="power-num" v-for="list in powerDate" :key="list.id">
            <router-link :to="list.url">
              <img :src="list.src">
              <div class="power-num-right">
                 <h2 class="power-num-tit">{{list.title}}</h2>
                 <p class="power-num-con">{{list.desc}}</p>
              </div>
            </router-link>
          </div>
      </div>
    </div>
     <tabbar style='position:fixed'>
        <tabbar-item>
          <img slot="icon" src="../../assets/home/home-1.png">
          <img slot="icon-active" src="../../assets/home/home_2.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="../../assets/home/mess-1.png">
          <img slot="icon-active" src="../../assets/home/mess-2.png">
          <span slot="label">消息</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="../../assets/home/perMess-1.png">
          <img slot="icon-active" src="../../assets/home/perMess-2.png">
          <span slot="label">个人中心</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import {Swiper,SwiperItem,Tabbar,TabbarItem,Badge} from 'vux'
import http from '../../api/base.js'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem,
    Tabbar,
    TabbarItem,
    Badge
  },
  data(){
    return{
      adsList:[],
      saleCountMap:{},
      saoRateMap:{},
      newDate:[],
      powerDate:[],
      id:""
    }
  },
  created() {
    this.reqHomeDate()
  },
  methods: {
    reqHomeDate(){
      http.post('http://139.199.115.100:8082/indexPageApi/sysNotice',{
        "andMoreMode": "1,2,3",
        "andMoreNum": 7,
        "systemType": "1",
        "userLoginName": "101",
        "userid": 101
      })
      .then((res) => {
        if(res.data.code == "success") {
          this.adsList = res.data.data.adsList
          this.saleCountMap = res.data.data.saleData.saleCountMap
          this.saoRateMap = res.data.data.saleData.saoRateMap
          this.newDate = res.data.data.sysNoticeList
          this.powerDate = res.data.data.accessPermitList
        }else if (res.data.code == 'error') {

        }
      },(error) => {

      })
    },
    handleDetailClick(id) {
      this.$store.dispatch('getDetailData');
    }
  },
}
</script>

<style scoped lang="stylus">
  .swiper 
    margin-bottom 0.08rem
  .ban-img 
    display block
    width 100%
    height 100%
  .num 
    width 100%
    height 1.96rem
    background #fff
    position relative
  .num .num-left
    width 24%
    height 1.96rem
    float left
  .num .num-left img
    width 1.5rem
    height 1.5rem
    margin-top 0.24rem
    margin-left 0.28rem
  .num .num-left .more
    position absolute
    top 0.66rem
    left 0.52rem
  .num .num-left .more span 
    margin-left 0.24rem
  .num .num-center
    width 35%
    height 0.92rem
    border-right 1px solid #ccc
    float left
    margin-top 0.54rem
    padding-left 0.2rem
    font-size 0.24rem
    color #101010
    line-height 0.44rem
  .num .num-right
    width 35%
    height 0.92rem
    margin-top 0.54rem
    padding-left 0.2rem
    float right
    line-height 0.44rem
  .news 
    width 100%
    height 1.3rem
    background #fff
    margin-top 0.18rem
    margin-bottom 0.18rem
    position relative
  .news .news-img
    width 20%
    height 1.27rem
    float left
  .news img 
    width 0.94rem
    height 0.62rem
    margin-left 0.36rem
    margin-top 0.32rem
  .news .news-swiper
    width 67%
    float left
    margin-top 0.3rem
  .news .news-swiper .news-tit
    font-size 0.24rem
    color #000
  .news .news-swiper .news-con
    font-size 0.24rem
    color #b2b2b2
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
  .news .news-msg
    position absolute
    top 0.6rem
    right 0.6rem
    padding 4px
    background #ff0707
  .news .news-icon
    position absolute
    top 0.44rem
    right 0.1rem
  .power
    width 100%
    min-height 3.13rem
    background #f5f4f4
  .power .power-num
    width 95%
    height 1.34rem
    background #e4f2ff
    margin 0.3rem auto 0
  .power .power-num:nth-child(2)
    background #f8e8e1
  .power .power-num img 
    width 2.4rem
    heigh 1.34rem
  .power .power-num .power-num-right
    width 62%
    float right
    margin-top 0.18rem
    padding-right 0.18rem
  .badge-value
    display: inline-block!important
  .vertical-middle
    vertical-align middle
</style>