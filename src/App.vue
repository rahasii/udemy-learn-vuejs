<template>
  <div id="app">
    <router-view :commonSettings="commonSettings"/>
    <ul>
      <li>
        <a v-bind:href="commonSettings.top">TOP</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      commonSettings: {
        vueOfficial: 'https://jp.vuejs.org/',
        top: '/'
      },
      display: this.$parent.bpi
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
