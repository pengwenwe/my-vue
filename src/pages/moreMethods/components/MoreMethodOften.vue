<template>
    <div class="moreMethodOften">
        <div class="often">
            <h2 class="often_tit">常用功能</h2>
            <grid :show-lr-borders="false" :show-vertical-dividers="false" class="nine" > 
                <grid-item  v-for="(more,index) in userMoreModelDate" :key="more.id" style="width:22.75%;">
                    <x-icon type="ios-minus" size="18" class="reduce_icon" @click="handleClickDelete(index,more)"></x-icon>
                    <img slot="icon" class="kind-img" :src="baseURL+more.iconUrl">
                    <span slot="label" class="king-name">{{more.name}}</span>
                </grid-item>
            </grid>
        </div>
        <div class="un_often">
            <h2 class="un_often_tit">不常用功能</h2>
            <grid :show-lr-borders="false" :show-vertical-dividers="false" class="nine" > 
                <grid-item  v-for="(Item,index) in UnUserMoreModelDate" :key="Item.id" style="width:22.75%;">
                    <x-icon type="ios-plus" size="18"  class="reduce_icon" @click="handleClickAdd(Item,index)"></x-icon>
                    <img slot="icon" class="kind-img" :src="baseURL+Item.iconUrl">
                    <span slot="label" class="king-name">{{Item.name}}</span>
                </grid-item>
            </grid>
        </div>
    </div>
</template>

<script>
import {Grid, GridItem} from 'vux'
import {baseURL} from '../../../api/url.js'
export default {
    name:'MoreMethodOften',
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
        userMoreModelDate() {
            return this.$store.state.market.userMoreModelDate
        },
        UnUserMoreModelDate() {
            return this.$store.state.market.UnUserMoreModelDate
        }
    },
    methods: {
        handleClickDelete: function(index,more){
            if(this.userMoreModelDate.length > 1) {
                this.userMoreModelDate.splice(index,1)
                this.UnUserMoreModelDate.push(more)
            }else{
                return false;
            }
        },
        handleClickAdd:function(index,Item) {
           if(this.userMoreModelDate.length < 7) {
               this.UnUserMoreModelDate.splice(Item,1)
               this.userMoreModelDate.push(index)
           }else {
               return false;
           }
        },
    }
}
</script>

<style scoped lang="stylus">
    .often
        width 100%
        height 5.26rem
        background #fff
        .often_tit
            font-size 0.36rem
            font-weight normal 
            padding 0.36rem 0 0.36rem 0.36rem
        .weui-grid
            height 1.75rem
            text-align center
            padding 10px 7px !important
            background #e7e7e7
            border-radius 5px
            margin-left 0.1rem
            margin-bottom 0.2rem
        .nine 
            min-height 3.73rem!important 
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
            font-size 12px
        .reduce_icon
            fill #de0003
            color #fff
            position absolute
            top 7px
            right 8px
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
            height 1.75rem
            text-align center
            padding 10px 7px !important
            background #e7e7e7
            border-radius 5px
            margin-left 0.1rem
            margin-bottom 0.2rem
        .nine 
            min-height 5.73rem 
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
            font-size 12px
        .reduce_icon
            fill green
            color #fff
            position absolute
            top 7px
            right 8px
    .weui-grids 
        height: 0!important
</style>
</style>
