<template>
  <div class="father">
    <div class="fatherContainer">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import footer from '../../modules/footer.vue'
export default {
  name: 'app',
  components: {
    'v-footer': footer
  }
}
</script>

<style lang="stylus-loader" rel="stylesheet/stylus">
.father
  .fatherContainer
    padding-bottom: 0.7rem
    background: #FAFAFA
</style>
