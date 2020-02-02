<template>
  <div>
    <p>Lesson33</p>
    <ul>
      <li>
        <a v-bind:href="commonSettings.vueOfficial" v-if="toggle">Vue.js</a>
      </li>
      <li>
        <a v-bind:href="commonSettings.top">v-bind TOP</a>
        <br />
        <a href="http://localhost:8080/">TOP</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Lesson33',
  props: {
    commonSettings: Object
  },
  data () {
    return {
      toggle: true
    }
  }
}
</script>
