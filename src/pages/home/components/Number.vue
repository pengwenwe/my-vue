<template>
    <div class="number">
        <div class="num">
          <div class="num-left">
            <img src="../../../assets/home/index.png" alt="">
            <p class="more">超出指标<br><span>{{saleCountMap.out}}</span></p>
          </div>
          <div class="num-center">
            <p>本月指标{{saleCountMap.target}}大罐</p>
            <p >已完成{{saleCountMap.act}}大罐</p>
          </div>
          <div class="num-right">
            <p>总销售扫码率{{saoRateMap.saoma}}</p>
            <p>绩效产品扫码率{{saoRateMap.saoma_point}}</p>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'Number',
    props:["saleCountMap","saoRateMap"],
    components: {

    }
}
</script>
<style scoped lang="stylus">
    .num 
        width 100%
        height 1.96rem
        background #fff
        position relative
    .num .num-left
        width 24%
        height 1.96rem
        float left
    .num .num-left img
        width 1.5rem
        height 1.5rem
        margin-top 0.24rem
        margin-left 0.28rem
    .num .num-left .more
        position absolute
        top 0.66rem
        left 0.52rem
    .num .num-left .more span 
        margin-left 0.24rem
    .num .num-center
        width 35%
        height 0.92rem
        border-right 1px solid #ccc
        float left
        margin-top 0.54rem
        padding-left 0.2rem
        font-size 0.24rem
        color #101010
        line-height 0.44rem
    .num .num-right
        width 35%
        height 0.92rem
        margin-top 0.54rem
        padding-left 0.2rem
        float right
        line-height 0.44rem
</style>


