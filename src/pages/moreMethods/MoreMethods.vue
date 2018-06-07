<template>
    <div class="moreMethods">
        <x-header :left-options="{backText: ''}" class="top">更多<a slot="right">完成</a></x-header>
        <MoreMethodOften />
        <!-- <MoreMethodUnOften /> -->
    </div>
</template>
<script>
import MoreMethodOften from './components/MoreMethodOften'
// import MoreMethodUnOften from './components/MoreMethodUnOften'
export default {
    name:'moreMethods',
    components: {
        MoreMethodOften
    }
}
</script>

<style scoped lang="stylus">
    .top 
        border-bottom 1px solid #ccc !important
</style>
