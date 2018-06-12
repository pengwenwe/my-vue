<template>
    <div class="moreMethods">
        <x-header :left-options="{backText: ''}" class="top">更多<a slot="right" @click="handleClickfinish()" >完成</a></x-header>
        <MoreMethodOften />
    </div>
</template>
<script>
import MoreMethodOften from './components/MoreMethodOften'
import http from '../../api/base.js'
export default {
    name:'moreMethods',
    components: {
        MoreMethodOften
    },
    methods: {
        handleClickfinish: function() {
            let userDate = this.$store.state.market.userMoreModelDate.length
            http.post('/indexPageApi/updateAndMore',{
               "andMoreMode": "1,2,3",
                "andMoreNum": userDate,
            })
            .then((res) => {
                // 成功回调
            },(error) => {
                // 失败回调
            });
        }
    }
}
</script>

<style scoped lang="stylus">
    .top 
        border-bottom 1px solid #ccc !important
</style>
