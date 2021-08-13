<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
import mainPage from './components/mainPage.vue'
export default {
  components: { mainPage },
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
