<template>
    <div class="SmallSwiper">
        <div class="news">
            <p class="news-img">
            <img style="width:47px;height:31px;"src="../../../assets/home/logo.png" alt="">
            </p>
            <swiper auto height="33px" direction="vertical" :interval=2000 class="text-scroll news-swiper" :show-dots="false">
            <swiper-item v-for="item in newDate" :key="item.id" @click.native = 'handleDetailClick(item.id)'>
                <p class="news-tit">{{item.title}}</p>
                <span class="news-con">{{item.content}}</span>
            </swiper-item>
            </swiper>
            <badge class="news-msg"></badge>
            <x-icon type="ios-arrow-right" class="news-icon" size="22"></x-icon>
        </div>
    </div>
</template>
<script>
    import {Swiper,SwiperItem,Badge} from 'vux'
    import http from '../../../api/base.js'
    export default {
        name:'SmallSwiper',
        props:["newDate"],
        components: {
            Swiper,
            SwiperItem,
            Badge
        }
    }
</script>
<style scoped lang="stylus">
    .news 
        width 100%
        height 1.3rem
        background #fff
        margin-top 0.18rem
        margin-bottom 0.18rem
        position relative
    .news .news-img
        width 20%
        height 1.27rem
        float left
    .news img 
        width 0.94rem
        height 0.62rem
        margin-left 0.36rem
        margin-top 0.32rem
    .news .news-swiper
        width 67%
        float left
        margin-top 0.3rem
    .news .news-swiper .news-tit
        font-size 0.24rem
        color #000
    .news .news-swiper .news-con
        font-size 0.24rem
        color #b2b2b2
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
    .news .news-msg
        position absolute
        top 0.6rem
        right 0.6rem
        padding 4px
        background #ff0707
    .news .news-icon
        position absolute
        top 0.44rem
        right 0.1rem
</style>


