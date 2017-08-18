<template>
  <div class="foodGuid">
    <!-- 取消自动播放轮播 -->
    <mt-swipe :auto="0">
      <!-- 第一页轮播 -->
      <mt-swipe-item>
        <ul class="foodGuidUl">
          <router-link to="search">
            <li><img src="../assets/images/foodGuid/yinpin.jpeg"><span>甜品饮品</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/meishi.jpeg"><span>美食</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/chaoshi.jpeg"><span>商超便利</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/bookbreakfirst.jpeg"><span>预订早餐</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/cake.jpeg"><span>鲜花蛋糕</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/breakfirst.jpeg"><span>早餐</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/zhunshida.jpeg"><span>准时达</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/xindiantehui.jpeg"><span>新店特惠</span></li>
          </router-link>
        </ul>
      </mt-swipe-item>
      <!-- 第二页轮播 -->
      <mt-swipe-item>
        <ul class="foodGuidUl">
          <router-link to="search">
            <li><img src="../assets/images/foodGuid/土豪推荐.jpeg"><span>土豪推荐</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/川湘菜.jpeg"><span>川湘菜</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/披萨意面.jpeg"><span>披萨意面</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/日韩料理.jpeg"><span>日韩料理</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/生鲜蔬果.jpeg"><span>生鲜蔬果</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/简餐.jpeg"><span>简餐</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/麻辣烫.jpeg"><span>麻辣烫</span></li>
          </router-link>
          <router-link to="">
            <li><img src="../assets/images/foodGuid/汉堡薯条.jpeg"><span>汉堡薯条</span></li>
          </router-link>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus-loader" rel="stylesheet/stylus">
.foodGuid
  width: 100%
  height: 2.2rem
  margin-top: 0.28rem
  background: #FFFFFF
  border-bottom: 0.0001rem solid rgba(148,148,148,0.3)
  /*导航面板*/
  .foodGuidUl
    overflow: hidden
    list-style: none
    width: 95%
    height: 1.8rem
    margin: 0 auto
    padding: 0
    padding-top: 0.16rem
    /*导航项*/
    li
      float: left
      display: inline-block
      width: 25%
      height: 46%
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
