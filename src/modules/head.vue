<template>
  <div class="headWrap">
    <div class="head">
      <!-- 显示收货地址的按钮 -->
      <mt-button v-model="address" class="addressBtn">
        <img src="../assets/images/head/导航.png" class="addressIcon">
        {{ address }}
      </mt-button>
      <ul class="randomLi">
        <li v-for="items in randomLi">{{ items.text }}</li>
      </ul>
    </div>
   <!-- 固定搜索框 -->
    <div :class="{search: issearch, searchFixed: issearchFixed}">
      <!-- 搜索按钮（图标） -->
      <router-link to="/search" class="routerlink">
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
      address: '广州市萝岗区开源大道11号',
      // 这里的随机应该在不超过19个字的前提下
      randomLi: [
        {text: '寿司', id: '1'},
        {text: '豆浆', id: '2'},
        {text: '麦当劳', id: '3'},
        {text: '幸福西饼', id: '4'},
        {text: '柳州螺蛳粉', id: '5'},
        {text: '公仔面', id: '6'}
      ],
      issearchFixed: false,
      issearch: true
    }
  },
  methods: {
    handleScroll () {
      this.scroll = document.body.scrollTop
      // console.log(this.scroll)
      if (this.scroll > 25) {
        this.issearch = false
        this.issearchFixed = true
      } else {
        this.issearch = true
        this.issearchFixed = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus-loader" rel="stylesheet/stylus">
/*最外层*/
.headWrap
  /*可滚动的header*/
  .head
    width: 100%
    background: rgba(0,169,253,1)
    margin-top: 0
    padding: 0
    line-height: 0.01rem
    text-align: left
    .mint-button:active::after
      opacity: 0
    /*显示地址*/
    .addressBtn
      width: 60%
      height: 0.25rem
      background: rgba(0,169,253,1)
      color: #FFFFFF
      box-shadow: none
      font-size: 0.18rem
      font-weight: bold
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      margin-left: 5%
      text-align: left
      padding: 0
      /*地址图标*/
      .addressIcon
        width: 0.17rem
    /*可滚动的ul*/
    .randomLi
      display: block
      width: 100%
      height: 0.2rem
      list-style: none
      padding: 0
      margin-top: 0.6rem
      font-size: 0.1rem
      li
        display: inline-block
        margin-left: 5%
        font-size: 0.125rem
        color: #FFFFFF
  /*固定搜索框*/
  .search
    overflow: hidden
    background: rgba(0,169,253,1)
    width: 100%
    height: 0.4rem
    position: absoluted
    z-index: 2
    margin-top: -0.9rem
    padding-top: 0.1rem
  .searchFixed
    overflow: hidden
    background: rgba(0,169,253,1)
    width: 100%
    height: 0.4rem
    position: fixed
    z-index: 2
    top: 0
    padding-top: 0.1rem
/*搜索框外层的路由导航*/
.headWrap .search .routerlink, .headWrap .searchFixed .routerlink
  overflow: hidden
  width: 90%
  float: left
  height: 0.3rem
  margin-left: 5%
  /*搜索框*/
  .searchBtn
    float: left
    width: 100%
    height: 100%
    background: #FFFFFF
    border-radius: 0
    font-size: 0.1rem
    color: rgba(169,169,169,1)
</style>
