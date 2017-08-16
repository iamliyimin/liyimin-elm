<template>
  <div class="headWrap">
    <!-- 显示收货地址的按钮 -->
    <mt-button v-model="address" icon="address" class="addressBtn">
      <img src="../../assets/images/导航.png" class="addressIcon">
      {{ address }}
    </mt-button>
    <!-- 固定搜索框 -->
    <div class="head">
      <!-- 搜索按钮（图标） -->
      <router-link to="/search" slot="left">
        <mt-button icon="search" class="searchBtn">搜索商家、商品名称</mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result: [
        {title: '这是第一条搜索结果', value: 'one'},
        {title: '这是第二条搜索结果', value: 'two'},
        {title: '这是第三条搜索结果', value: 'three'},
        {title: '这是第四条搜索结果', value: 'four'}
      ],
      searchValue: '',
      address: '广州市萝岗区开源大道11号'
    }
  },
  methods: {
    warn: function () {
      this.$toast('Upload Complete')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus-loader" rel="stylesheet/stylus">
/*最外层*/
.headWrap
  width: 100%
  background: rgba(49,144,232,1)
  margin-top: 0
  padding: 0
  .mint-button:active
    opacity: 0
  /*显示地址*/
  .addressBtn
    width: 60%
    background: rgba(49,144,232,1)
    color: #FFFFFF
    box-shadow: none
    font-size: 1rem
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    .addressIcon
      width: 1rem
  /*固定搜索框*/
  .head
    background: rgba(49,144,232,1)
    width: 100%
    height: 2.2rem
    position: fixed
    top: 10%
    left: 0
  /*搜索框*/
  .searchBtn
    width: 90%
    height: 1.5rem
    margin-top: 2%
    background: #FFFFFF
    border-radius: 0
    color: rgba(221,221,221,1)

</style>
