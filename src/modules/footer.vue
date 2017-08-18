<template>
  <div class="footerWrap">
    <div class="footer">
      <ul class="footList">
        <router-link to="/Father/takeOut">
          <li><img src="../assets/images/footer/饿了么.png"><span>外卖</span></li>
        </router-link>
        <router-link to="/Father/searchs">
          <li><img src="../assets/images/footer/发现.png"><span>发现</span></li>
        </router-link>
        <router-link to="">
          <li><img src="../assets/images/footer/订单.png"><span>订单</span></li>
        </router-link>
        <router-link to="">
          <li><img src="../assets/images/footer/我的.png"><span>我的</span></li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus-loader" rel="stylesheet/stylus">
/*footer最外层*/
.footerWrap
  /*footer层*/
  .footer
    position: fixed
    bottom: 0
    width: 100%
    height: 0.7rem
    background: #FFFFFF
    box-sizing: border-box
    border-top: 0.0001rem solid rgba(148,148,148,0.3)
    /*footer层的ul*/
    .footList
      overflow: hidden
      display: block
      list-style: none
      width: 100%
      height: 0.7rem
      margin: 0 auto
      padding: 0
      padding-top: 0.1rem
      background: #FFFFFF
      /*footer层的li*/
      li
        float: left
        display: inline-block
        width: 25%
        height: 100%
        /*footer层每一项的图标*/
        img
          display: block
          width: 31%
          height: 35%
          text-align: center
          margin-left: 0.34rem
        /*footer层每一项的文字*/
        span
          display: block
          width: 100%
          font-size: 0.12rem
          color: #8A8A8A
          line-height: 0.3rem
</style>
