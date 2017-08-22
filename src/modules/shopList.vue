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
            <span class="shopName">潮客汇潮全牛火锅（萝岗店）</span>
            <span class="hasType">票</span>
          </li>
          <li class="shopCommit">
            <p class="star">
              <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" track-by="index">
              </span><!--性能优化 track-by 数据不改变时不会重新渲染-->
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        score: '3.3'
      }
    },
    methods: {
    },
    computed: { // 计算属性
      itemClasses () {
        let result = []
        let score = Math.floor(this.score * 2) / 2
        let hasDecimal = score % 1 !== 0
        let integer = Math.floor(score)
        for (let i = 0; i < integer; i++) {
          result.push('on')
        }
        if (hasDecimal) {
          result.push('half')
        }
        while (result.length < 5) {
          result.push('off')
        }
        return result
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus-loader" rel="stylesheet/stylus">
/*商家列表*/
.shopList
  width: 100%
  margin-top: 0.12rem
  background: #FFFFFF
  border-top: 0.0001rem solid rgba(148,148,148,0.2)
  /*附件商家标题*/
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
  /*商家项*/
  .shopItem
    width: 100%
    height: 2rem
    border-bottom: 0.0001rem solid rgba(148,148,148,0.2)
    /*具体某个商家*/
    .ashop
      overflow: hidden
      width: 95%
      margin: 0 auto
      padding: 0
      /*具体某个商家的logo*/
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
      /*具体某个商家的店面信息*/
      .shopDescription
        overflow: hidden
        list-style: none
        display: inline-block
        float: left
        width: 81%
        margin: 0
        padding: 0
        font-size: 0.1rem
        li
          overflow: hidden
          display: inline-block
          width: 100%
          float: left
          padding: 0
        .shopTitle
          text-align: left
          height: 0.3rem
          /*具体某个商家是否是品牌店*/
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
          /*具体某个商家的店名*/
          .shopName
            display: inline-block
            float: left
            height:0.23rem
            padding-left: 0.03rem
            line-height: 0.23rem
            font-size: 0.17rem
            font-weight: bold
          /*具体某个商家是否有外卖保或者开发票*/
          .hasType
            display: inline-block
            float: right
            height:0.17rem
            padding: 0.02rem
            margin-top: 0.03rem
            line-height: 0.13rem
            font-size: 0.1rem
            text-align: center
            color: rgba(148,148,148,1)
            border-radius: 0.03rem
            box-sizing: border-box
            border: 0.00001rem solid rgba(148,148,148,0.2)
            background: rgba(148,148,148,0.08)
        .shopCommit
          overflow: hidden
          text-align: left
          height: 0.2rem
          line-height: 0.2rem
          /*background: red*/
          .star
            font-size: 0
          .star-item
            display: inline-block
            background-repeat: no-repeat
            width: 20px
            height: 20px
            /*margin-right: 22px*/
            background-size: 100%
          .star-item.on
            background-image: url(../assets/images/shoplist/on.png)
          .star-item.half
            background-image: url(../assets/images/shoplist/half.png)
          .star-item.off
            background-image: url(../assets/images/shoplist/off.png)
</style>
