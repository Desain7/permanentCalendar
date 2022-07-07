<template>
  <headerTitle></headerTitle>
  <router-view></router-view>
  <footerIndex></footerIndex>
</template>

<script>
import headerTitle from './components/Header/headerTitle'
import footerIndex from './components/Footer/footerIndex'

export default {
  name: 'App',
  components: {
    headerTitle,
    footerIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
