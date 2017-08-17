<template>
  <div class="takeOutWrap">
    <v-header></v-header>
    <div class="caroual">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <ul class="caroualUl">
            <router-link to="/">
              <li><img src="../../assets/images/foodGuid/yinpin.jpeg"><span>甜品饮品</span></li>
            </router-link>
            <router-link to="/">
              <li><img src="../../assets/images/foodGuid/meishi.jpeg"><span>美食</span></li>
            </router-link>
            <router-link to="/">
              <li><img src="../../assets/images/foodGuid/chaoshi.jpeg"><span>商超便利</span></li>
            </router-link>
            <router-link to="/">
              <li><img src="../../assets/images/foodGuid/bookbreakfirst.jpeg"><span>预订早餐</span></li>
            </router-link>
            <router-link to="/">
              <li><img src="../../assets/images/foodGuid/cake.jpeg"><span>鲜花蛋糕</span></li>
            </router-link>
            <router-link to="/">
              <li><img src="../../assets/images/foodGuid/breakfirst.jpeg"><span>早餐</span></li>
            </router-link>
            <router-link to="/">
              <li><img src="../../assets/images/foodGuid/zhunshida.jpeg"><span>准时达</span></li>
            </router-link>
            <router-link to="/">
              <li><img src="../../assets/images/foodGuid/xindiantehui.jpeg"><span>新店特惠</span></li>
            </router-link>
          </ul>
        </mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import header from '../head/head.vue'
export default {
  components: {
    'v-header': header
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus-loader" rel="stylesheet/stylus">
/*最外层*/
.takeOutWrap
  .caroual
    width: 95%
    height: 2.2rem
    margin: 0 auto
    margin-top: 0.28rem
    background: #FFFFF
    .caroualUl
      overflow: hidden
      list-style: none
      width: 100%
      height: 1.8rem
      margin: 0
      padding: 0
      padding-top: 0.16rem
      background: #FFFFF
      li
        float: left
        display: inline-block
        width: 25%
        height: 46%
        background: #FFFFF
        img
          display: block
          width: 51%
          height: 55%
          text-align: center
          margin-left: 0.2rem
        /*footer层每一项的文字*/
        span
          display: block
          width: 100%
          font-size: 0.14rem
          color: #8A8A8A
          line-height: 0.3rem
</style>
