<template>
  <div class="takeOutWrap">
    <v-header></v-header>
    <v-foodguid></v-foodguid>
    <v-shoplist></v-shoplist>
  </div>
</template>

<script type="text/ecmascript-6">
// 导入header模块
import header from '../../modules/head.vue'
// 导入foodGuid模块
import foodGuid from '../../modules/foodGuid.vue'
// 导入shopList模块
import shopList from '../../modules/shopList.vue'
export default {
  components: {
    'v-header': header,
    'v-foodguid': foodGuid,
    'v-shoplist': shopList
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
</style>
