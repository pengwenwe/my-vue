<template>
  <div class="marketingAssistant">
     <x-header :left-options="{backText: ''}">营销小助手</x-header>
     <ul>
       <li v-for="market in topModelDate" :key="market.id">
         <img :src="'http://123.206.62.102/'+ market.iconUrl" alt="">
         <p>{{market.name}}</p>
       </li>
     </ul>
      <grid :show-vertical-dividers="true":show-lr-borders="false">
        <grid-item v-for="(more,i) in andMoreModelDate" :key="more.id" style="width:23.75%" v-if="i<7">
          <img class="kind-img":src="'http://123.206.62.102/' + more.iconUrl" alt="">
          <span class="king-name">{{more.name}}</span>
        </grid-item>
        <grid-item style="width:23.75%" :show-vertical-dividers="true">
          <img class="kind-img" src="../../assets/list/more.png">
          <span class="king-name">更多</span>
        </grid-item>
      </grid>
      <FindBussiness />
  </div>
</template>

<script>
import {Grid, GridItem} from 'vux'
import http from '../../api/base.js'
import FindBussiness from './components/FindBussiness'
export default {
  name: 'MarketingAssistant',
  components: {
    Grid,
    GridItem,
    FindBussiness
  },
  data(){
    return{
      topModelDate:[],
      andMoreModelDate:[],
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
        "userLoginName": "102",
        "userid": 102
      })
      .then((res) => {
        if(res.data.code == "success") {
          this.topModelDate = res.data.data.indexPage.topModelList
          this.andMoreModelDate =  res.data.data.indexPage.andMoreModelList
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
    box-shadow 0 0 10px #e5e4e4
    justify-content center
    margin-left 0.2rem
  ul li:nth-child(2)
    background #efb053
  ul li:nth-child(3)
    background #93cd67
  ul li:nth-child(4)
    background #66bee6
  ul li img
    width 0.58rem
    height 0.58rem
    margin-top 0.28rem
  ul li p
    color #fff
    font-size 14px
  .weui-grid
    text-align center
    padding 10px 10px !important
  .kind-img
    width 0.6rem
    height 0.6rem
    display block
    margin auto
  .king-name
    margin-top 0.2rem
    display block
  .weui-grid:nth-child(7)
    border-right 1px solid #e1e1e1
</style>