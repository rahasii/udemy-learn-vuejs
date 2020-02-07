<template>
  <div class="lesson">
    <p>{{componentName}}</p>
    <ul>
      <li>
        <a v-bind:href="commonSettings.vueOfficial" v-if="toggle">Vue.js</a>
      </li>
      <!-- <li>
        <a v-bind:href="commonSettings.top">TOP</a>
      </li> -->
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Lesson33',
  props: {
    commonSettings: Object,
    componentName: String
  },
  data () {
    return {
      toggle: true
    }
  }
}
</script>
