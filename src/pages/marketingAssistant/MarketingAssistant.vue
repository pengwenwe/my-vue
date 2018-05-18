<template>
  <div class="marketingAssistant">
     <x-header :left-options="{backText: ''}">营销小助手</x-header>
     <ul>
       <li v-for="market in topModelList" :key="market.id">
         <img :src="market.iconUrl" alt="">
         <p>{{market.name}}</p>
       </li>
     </ul>
     <grid :cols="3" :show-lr-borders="false">
        <grid-item v-for="i in 6" :key="i">
          <img src="" alt="">
          <span class="grid-center">{{i}}</span>
        </grid-item>
      </grid>
  </div>
</template>

<script>
import { Grid, GridItem} from 'vux'
import http from '../../api/base.js'
export default {
  name: 'MarketingAssistant',
  components: {
    Grid,
    GridItem
  },
  data(){
    return{
      topModelList:[],
    }
  },
  created() {
    this.reqMarketDate()
  },
  methods: {
    reqMarketDate(){
      http.post('http://123.206.62.102/indexPageApi/indexPage',{
        "andMoreMode": "1,2,3",
        "andMoreNum": 7,
        "systemType": "1",
        "userLoginName": "101",
        "userid": 101
      })
      .then((res) => {
        if(res.data.code == "success") {
          this.topModelList = res.data.data.indexPage.topModelList
        }else if (res.data.code == 'error') {

        }
      },(error) => {

      })
    }
  }
}
</script>

<style scoped lang="stylus">
  ul
    height 2.11rem
    background #fff
    border-top 1px solid #ccc
    display flex
  ul li 
    flex-direction column
    width 1.6rem
    height 1.6rem
    background #599ce2
    text-align center
    margin-top 0.3rem 
    border-radius 0.1rem
    margin-right 0.24rem
    box-shadow 0 0 10px #e5e4e4
    justify-content center 
  ul li:nth-child(2)
    background #efb053
  ul li:nth-child(3)
    background #93cd67
  ul li:nth-child(4)
    background #66bee6
</style>