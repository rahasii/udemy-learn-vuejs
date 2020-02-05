<template>
  <component
    v-bind:is="componentName"
    :commonSettings="commonSettings"
    :componentName="componentName"
    :bpi="bpi"
  ></component>
</template>

<script>
import Lesson33 from './Lessons/Lesson33.vue'
import Lesson34 from './Lessons/Lesson34.vue'
import Lesson62 from './Lessons/Lesson62.vue'

export default {
  name: 'Lesson',
  components: {
    Lesson33: Lesson33,
    Lesson34: Lesson34,
    Lesson62: Lesson62
  },
  props: {
    commonSettings: Object,
    bpi: Object
  },
  data () {
    return {
      componentName: 'Lesson' + this.$route.params.number
    }
  }
}
</script>
