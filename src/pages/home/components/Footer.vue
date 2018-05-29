<template>
    <div class="footer">
        <tabbar style='position:fixed'>
            <tabbar-item>
                <img slot="icon" src="../../../assets/home/home-1.png">
                <img slot="icon-active" src="../../../assets/home/home_2.png">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="../../../assets/home/mess-1.png">
                <img slot="icon-active" src="../../../assets/home/mess-2.png">
                <span slot="label">消息</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="../../../assets/home/perMess-1.png">
                <img slot="icon-active" src="../../../assets/home/perMess-2.png">
                <span slot="label">个人中心</span>
            </tabbar-item>
         </tabbar>
    </div>
</template>
<script>
import {Tabbar,TabbarItem} from 'vux'
export default {
    name: 'Footer',
    components: {
        Tabbar,
        TabbarItem
    }
}
</script>
<style>

</style>


