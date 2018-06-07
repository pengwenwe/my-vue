<template>
    <div class="moreMethodUnOften">
        <div class="un_often">
            <h2 class="un_often_tit">不常用功能</h2>
            <grid :show-lr-borders="false" :show-vertical-dividers="false" class="nine" > 
                <grid-item  v-for="more in deleteMoreModelDate" :key="more.id" style="width:22.75%;">
                    <x-icon type="ios-plus" size="18"  class="reduce_icon"></x-icon>
                    <img slot="icon" class="kind-img" :src="baseURL+more.iconUrl">
                    <span slot="label" class="king-name">{{more.name}}</span>
                </grid-item>
            </grid>
        </div>
    </div>
</template>

<script>
import {Grid, GridItem} from 'vux'
import {baseURL} from '../../../api/url.js'
export default {
    name:'MoreMethodUnOften',
    components: {
        Grid, 
        GridItem
    },
    data() {
        return {
            baseURL:baseURL
        }
    },
    computed: {
        deleteMoreModelDate() {
            return this.$store.state.market.andMoreModelDate.slice(7)
        }
    }
}
</script>

<style scoped lang="stylus">
    .un_often
        width 100%
        height 7.63rem
        background #fff
        margin-top 0.2rem
        .un_often_tit
             font-size 0.36rem
             font-weight normal
             padding 0.36rem 0 0.36rem 0.36rem 
     .weui-grid
        height 1.9rem
        text-align center
        padding 10px 7px !important
        background #e7e7e7
        border-radius 5px
        margin-left 0.1rem
        margin-bottom 0.2rem
    .nine 
        height 3.73rem 
        margin-left 0.1rem
    .weui-grid:after
        border-bottom 0!important
    .kind-img
        width 0.55rem
        height 0.55rem
        display block
        margin 12px auto
    .king-name
        display block
        white-space normal
    .reduce_icon
        fill green
        color #fff
        position absolute
        top 7px
        right 8px
</style>
