<template>
  <div id="app">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar'

export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
