<template>
    <div class="btn">
        <button class="btn"><slot></slot></button>
    </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style scoped lang='stylus'>
    @import '../static/variable.styl'
    .btn
        position fixed 
        width 100%
        color $color-white
        font-size $font-size-large-xx
        height 1rem
        background $color-btn-green
        bottom 0
        border 0 none
</style>