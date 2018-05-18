<template>
    <div class="btnList">
        <button class='btn'>{{text[0]}}</button>
        <button class="btn">{{text[1]}}</button>
    </div>
</template>

<script>
export default {
  name: 'Button',
  props:{
      text:{
          type:Array,
          default:[]
      }
  }
}
</script>

<style scoped lang='stylus'>
    @import '../static/variable.styl'
    .btnList
        display flex
        position fixed
        bottom 1rem
        width 100%
        height 1rem
        .btn
            flex 1
            height 100%
            border 0 none
            color $color-white
            font-size $font-size-large-xx
        .btn:nth-child(1)
            background-color $color-btn-green
        .btn:nth-child(2)
            background-color $color-btn-blue
</style>