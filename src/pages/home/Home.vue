<template>
  <div class="home">
    <div style="overflow: scroll;position:absolute;top:0;bottom:1rem;">
      <SwiperInfo :adsList ="adsList"/>
      <Number :saleCountMap="saleCountMap" :saoRateMap ="saoRateMap"/>
      <SmallSwiper :newDate="newDate"/>
      <PowerModule :powerDate="powerDate"/>
      <Footer />
    </div>
  </div>
</template>

<script>
import {Swiper,SwiperItem,Tabbar,TabbarItem,Badge} from 'vux'
import http from '../../api/base.js'
import SwiperInfo from './components/SwiperInfo'
import Number from './components/Number'
import SmallSwiper from './components/SmallSwiper'
import PowerModule from './components/PowerModule'
import Footer from './components/Footer'
export default {
  name: 'Home',
  components: {
    SwiperInfo,
    Number,
    SmallSwiper,
    PowerModule,
    Footer,
    Swiper,
    SwiperItem,
    Tabbar,
    TabbarItem,
    Badge
  },
  data(){
    return{
      saleCountMap:{},
      saoRateMap:{},
      newDate:[],
      powerDate:[],
      id:"" 
    }
  },
  computed: {
    adsList() {
      return this.$store.state.home.adsList
    }
  },
  created() {
    this.reqHomeDate()
  },
  methods: {
    reqHomeDate(){
      this.$store.dispatch("reqHomeDate");
      },
    },
  }
</script>

<style scoped lang="stylus">
  .badge-value
    display: inline-block!important
  .vertical-middle
    vertical-align middle
</style>