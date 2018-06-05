<template>
    <div class="SmallSwiper">
        <div class="news">
            <swiper auto height="33px" direction="vertical" :interval=2000 class="text-scroll news-swiper" :show-dots="false">
                <swiper-item v-for="item in newDate" :key="item.id" @click.native = 'handleDetailClick(item.id)'>
                     <p class="news-img">
                        <img style="width:47px;height:31px;" src="../../../assets/home/logo.png" alt="">
                     </p>
                     <div class="news-center">
                        <p class="news-tit"><img src="../../../assets/home/new.png" alt="">&nbsp;&nbsp;{{item.title}}</p>
                        <span class="news-con">{{item.content}}</span>
                     </div>
                    <badge class="news-msg"></badge>
                    <x-icon type="ios-arrow-right" class="news-icon" size="22"></x-icon>
                </swiper-item>
            </swiper>
        </div>
    </div>
</template>
<script>
    import {Swiper,SwiperItem,Badge} from 'vux'
    import http from '../../../api/base.js'
    export default {
        name:'SmallSwiper',
        components: {
            Swiper,
            SwiperItem,
            Badge
        },
        computed: {
            newDate() {
                return this.$store.state.home.newDate
            },
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
        .news-swiper
            width 100%
            padding-top 0.3rem
            .news-img
                width 20%
                height 0.66rem
                float left
                img 
                    margin-left 0.36rem
            .news-center
                float left
                width 60%
                .news-tit
                    font-size 0.24rem
                    color #000
                    img 
                        width 0.49rem
                        height 0.17rem
                .news-con
                    font-size 0.24rem
                    color #b2b2b2
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
            .news-msg
                position: absolute;
                top: 0.3rem;
                right: 0.9rem;
                padding: 4px;
                background: #ff0707;
            .news-icon
                position: absolute;
                top: 0.18rem;
                right: 0.3rem;
</style>


