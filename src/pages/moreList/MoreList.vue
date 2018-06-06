<template>
    <div class="moreList">
        <x-header :left-options="{backText: ''}" class="top">更多</x-header>
        <MoreListTop />
        <MoreListKind />
    </div>
</template>
<script>
import MoreListTop from './components/MoreListTop'
import MoreListKind from './components/MoreListKind'
export default {
    name:'MoreList',
    components: {
        MoreListTop,
        MoreListKind
    }
}
</script>
<style scoped lang="stylus">
.top 
    border-bottom 1px solid #ccc !important
</style>


