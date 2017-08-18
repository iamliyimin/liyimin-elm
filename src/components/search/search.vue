<template>
  <mt-header fixed class="headBox">
    <router-link slot="left" to="takeOut">
      <mt-button icon="back">搜索模块
      </mt-button>
    </router-link>
  </mt-header>
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
      searchValue: ''
    }
  },
  methods: {
    // warn: function () {
    //   this.$toast('Upload Complete')
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus-loader" rel="stylesheet/stylus">
  .headBox
    background: #3190E8
    /*height: 1.95rem*/
    /*.mt-button
      display: flex
      text-align: center*/
</style>
