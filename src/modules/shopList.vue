<template>
  <div class="shopList">
    <!-- 附近商家,用了mintui的mt-cell组件（自定义图标） -->
    <mt-cell title="附近商家" class="shops">
      <img slot="icon" src="../assets/images/shoplist/商家.png" width="24" height="24">
    </mt-cell>
    <!-- 商家列表的每一项 -->
    <div class="shopItem">
      <!-- 商家列表的每一家店 -->
      <div class="ashop">
        <!-- 每家店的招牌图片-->
        <div class="shopImg">
          <img src="../assets/images/shoplist/img1.jpg">
        </div>
        <!-- 每家店的信息栏 -->
        <ul class="shopDescription">
          <li class="shopTitle">
            <span class="brand">品牌</span>
            <span class="shopName">商家1111111</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus-loader" rel="stylesheet/stylus">
.shopList
  width: 100%
  margin-top: 0.12rem
  background: #FFFFFF
  /*border-top: 0.0001rem solid rgba(148,148,148,0.2)*/
  .shops
    width: 100%
    height: 0.4rem
    text-align: left
    color: #3D3D3D
    font-size: 0.5rem
    font-weight: bold
    background-image: none
    img
      width: 0.23rem
      height: 0.23rem
  .shopItem
    width: 100%
    height: 2rem
    border-bottom: 0.0001rem solid rgba(148,148,148,0.2)
    .ashop
      overflow: hidden
      width: 95%
      margin: 0 auto
      padding: 0
      .shopImg
        display: inline-block
        float: left
        width: 19%
        height: 0.6rem
        padding: 0
        text-align: left
        line-height: 0.45rem
        box-sizing: border-box
        border: 0.00001rem solid rgba(148,148,148,0.4)
        img
          padding: 0
          margin: 0
          width: 100%
          height: 100%
      .shopDescription
        overflow: hidden
        list-style: none
        display: inline-block
        float: left
        width: 81%
        margin: 0
        padding: 0
        font-size: 0.1rem
        /*background: red*/
        li
          overflow: hidden
          display: inline-block
          width: 100%
          float: left
          padding: 0
        .shopTitle
          text-align: left
          height: 0.3rem
          .brand
            display: inline-block
            margin: 0.04rem
            float: left
            width: 0.35rem
            height:0.18rem
            line-height: 0.18rem
            font-size: 0.14rem
            color: #3D3D3D
            text-align: center
            font-weight: bold
            border-radius: 0.03rem
            background: #FFD930
          .shopName
            display: inline-block
            float: left
            width: 1.5rem
            height:0.23rem
            padding-left: 0.03rem
            line-height: 0.23rem
            font-size: 0.17rem
            font-weight: bold
</style>
