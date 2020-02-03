<template>
  <component v-bind:is="componentName" :commonSettings="commonSettings" :componentName="componentName"></component>
</template>

<script>
import Lesson33 from './Lessons/Lesson33.vue'
import Lesson34 from './Lessons/Lesson34.vue'

export default {
  name: 'Lesson',
  components: {
    Lesson33: Lesson33,
    Lesson34: Lesson34
  },
  props: {
    commonSettings: Object
  },
  data () {
    return {
      componentName: 'Lesson' + this.$route.params.number
    }
  }
}
</script>
