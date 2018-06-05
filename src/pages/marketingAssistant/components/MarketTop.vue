<template>
    <div class="marketTop">
        <ul>
            <li v-for="market in topModelDate" :key="market.id">
                <img :src="baseURL+market.iconUrl" alt="">
                <p>{{market.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import {baseURL} from '../../../api/url.js'
export default {
    name:"marketTop",
    data() {
        return {
            baseURL:baseURL
        }
    },
    computed: {
        topModelDate() {
            return this.$store.state.market.topModelDate
        },
    }
}
</script>
<style scoped lang="stylus">
    ul
        height 2.11rem
        background #fff
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
</style>


