<template>
  <div class="footerWrap">
    <div class="footer">
      <ul class="footList">
        <li>饿了么</li>
        <li>发现</li>
        <li>订单</li>
        <li>我的</li>
      </ul>
    </div>
  </div>
</template>

<script>
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
.footerWrap
  .footer
    position: fixed
    bottom: 0
    width: 100%
    height: 0.6rem
    background: #FFFFF
    box-sizing: border-box;
    border-top: 0.0001rem solid rgba(148,148,148,0.5)
    .footList
      display: block
      list-style: none
      width: 100%
      height: 100%
      background: red
      font-size: 0.1rem
      li
        display: inline-block
        margin-left: 5%
        font-size: 0.125rem
        color: red
</style>
