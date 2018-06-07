<template>
    <div class="moreListKind">
         <grid :show-lr-borders="false" :show-vertical-dividers="false" class="nine" :cols="4"> 
            <grid-item  v-for="more in andMoreModelDate" :key="more.id">
                <img slot="icon" class="kind-img" :src="baseURL+more.iconUrl">
                <span slot="label" class="king-name">{{more.name}}</span>
            </grid-item>
            <grid-item link="../MoreMethods" style="width:25%;height:15%;border:1px dashed #000;margin-top: 18px;margin-left: 4px;">
                <span slot="label" class="king-name edit">编辑</span>
            </grid-item>
         </grid>
    </div>
</template>
<script>
import {Grid, GridItem} from 'vux'
import {baseURL} from '../../../api/url.js'
export default {
    name:'MoreListKind',
    components: {
        Grid, 
        GridItem
    },
    data(){
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
        padding 20px 7px !important
    .nine 
        height 11rem 
        margin-top 0.2rem
    .weui-grid:after
        border-bottom 0!important
    .kind-img
        width 0.6rem
        height 0.6rem
        display block
        margin auto
    .king-name
        margin-top 0.2rem
        display block
        white-space normal
</style>
