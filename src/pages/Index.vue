<template>
  <div id="container">
    <h1>{{this.$store.state.data}}</h1>
    <x-button type="primary" @click.native='handleClick'>submit</x-button>
    <scroller>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
    </scroller>
    <toast v-model="isToastShow" type="success" width='4rem'>配置vux成功</toast>
    <oneBtn>你好</oneBtn>
    <TwoBtn :text='textMsg'></TwoBtn>
  </div>
</template>

<script>
import { XButton } from 'vux'
import Scroller from '../components/Scroll.vue'
import OneBtn from '../components/OneBtn.vue'
import TwoBtn from '../components/TwoBtn.vue'
export default {
  name: 'Index',
  data(){
    return{
      isToastShow:false,
      textMsg:['返回','提交']
    }
  },
  components: {
    XButton,
    Scroller,
    OneBtn,
    TwoBtn
  },
  methods:{
    handleClick(){
        // this.isToastShow=true
        console.log(YES)
    }
  }
}
</script>

<style scoped lang='stylus'>
    #container
      h1
        display flex
        padding 0.5rem
        font-size 0.4rem
        justify-content center
        align-items center
      #scroller
        top 3rem  
</style>