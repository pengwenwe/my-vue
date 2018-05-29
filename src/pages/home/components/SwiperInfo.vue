<template>
    <div class="swiperInfo">
        <swiper auto class="swiper" height="264.5px" dots-position="center" dots-class="yuanquan">
            <swiper-item v-for="list in adsList" :key="list.id">
                <img class="ban-img" :src="list.imgUrl" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import {Swiper,SwiperItem} from 'vux'
import http from '../../../api/base.js'
export default {
    name: 'SwiperInfo',
    props:["adsList"],
    components: {
        Swiper,
        SwiperItem
    }
}
</script>
<style scoped lang="stylus">
    .swiper 
        margin-bottom 0.08rem
    .ban-img 
        display block
        width 100%
        height 100%
</style>

