<template>
    <div class ="PowerModule">
        <div class="power">
            <div class="power-num" v-for="list in powerDate" :key="list.id">
                <router-link :to="list.url">
                    <img :src="list.src">
                    <div class="power-num-right">
                        <h2 class="power-num-tit">{{list.title}}</h2>
                        <p class="power-num-con">{{list.desc}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import http from '../../../api/base.js'
export default {
    name:'PowerModule',
    props:["powerDate"],
    components: {
        
    }
}
</script>
<style  scoped lang="stylus">
  .power
    width 100%
    min-height 3.13rem
    background #f5f4f4
  .power .power-num
    width 95%
    height 1.34rem
    background #e4f2ff
    margin 0.3rem auto 0
  .power .power-num:nth-child(2)
    background #f8e8e1
  .power .power-num img 
    width 2.4rem
    heigh 1.34rem
  .power .power-num .power-num-right
    width 62%
    float right
    margin-top 0.18rem
    padding-right 0.18rem
</style>


