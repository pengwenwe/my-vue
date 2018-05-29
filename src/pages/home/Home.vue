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
  .badge-value
    display: inline-block!important
  .vertical-middle
    vertical-align middle
</style>