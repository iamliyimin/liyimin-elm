<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus-loader" rel="stylesheet/stylus">
@import "./assets/stylus/media.styl"
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
body
  margin: 0
.mint-swipe-indicator
  width: 0.14rem
  height: 0.015rem
  border-radius: 0
  background: #8A8A8A
  opacity: 1
.mint-swipe-indicator.is-active
  background: rgba(0,169,253,1)
.mint-cell-wrapper
  font-size: 0.16rem
</style>
