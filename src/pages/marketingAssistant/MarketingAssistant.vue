<template>
  <div class="marketingAssistant">
     <x-header :left-options="{backText: ''}" class="top">赢销小助手</x-header>
     <div style="overflow:hidden;">
      <div style="overflow: scroll;position:absolute;top:0.9rem;bottom:0;">
          <MarketTop />
          <MoreNumber />
          <FindBussiness />
          <SaleAchieve />
          <ConsumerCare />
        </div>
      </div>
    </div>
</template>

<script>
import http from '../../api/base.js'
import MarketTop from './components/MarketTop'
import MoreNumber from './components/MoreNumber'
import FindBussiness from './components/FindBussiness'
import SaleAchieve from './components/SaleAchieve'
import ConsumerCare from './components/ConsumerCare'
import {baseURL} from '../../api/url.js'
export default {
  name: 'MarketingAssistant',
  components: {
    MarketTop,
    MoreNumber,
    FindBussiness,
    SaleAchieve,
    ConsumerCare,
  },
  data(){
    return{
    }
  },
  created() {
    this.reqMarketDate()
  },
  methods: {
    reqMarketDate() {
      this.$store.dispatch("reqMarketDate");
    }
  }
}
</script>

<style scoped lang="stylus">
  .top 
    border-bottom 1px solid #ccc !important
</style>