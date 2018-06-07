<template>
    <div class="moreNumber">
         <grid :cols="4" :show-vertical-dividers="true" :show-lr-borders="false">
            <grid-item v-for="(more,i) in andMoreModelDate" :key="more.id" v-if="i<7">
              <img slot="icon" class="kind-img" :src="baseURL+more.iconUrl" alt="">
              <span slot="label" class="king-name">{{more.name}}</span>
            </grid-item>
            <grid-item style="width:25%" link="../MoreList">
                <img  slot="icon" class="kind-img" src="../../../assets/list/more.png">
                <span slot="label" class="king-name">更多</span>
            </grid-item>
          </grid>
    </div>
</template>
<script>
import {Grid, GridItem} from 'vux'
import {baseURL} from '../../../api/url.js'
export default {
    name: 'MoreNumber',
    components:{
        Grid,
        GridItem
    },
    data() {
        return {
          baseURL:baseURL
        }
    },
    computed: {
        andMoreModelDate() {
            return this.$store.state.market.andMoreModelDate
        }
    }
}
</script>
<style scoped lang="stylus">
  .weui-grid
        text-align center
        padding 10px 7px !important
  .kind-img
        width 0.6rem
        height 0.6rem
        display block
        margin auto
  .king-name
        margin-top 0.2rem
        display block
  .weui-grid:nth-child(3)
        border-right 1px solid #D9D9D9     
  .weui-grid:nth-child(7)
        border-right 1px solid #D9D9D9  
</style>


