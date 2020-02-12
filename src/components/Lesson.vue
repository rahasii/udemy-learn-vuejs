<template>
  <component
    v-bind:is="componentName"
    :commonSettings="commonSettings"
    :componentName="componentName"
  ></component>
</template>

<script>
import Lesson33 from './Lessons/Lesson33.vue'
import Lesson34 from './Lessons/Lesson34.vue'
import Lesson49 from './Lessons/Lesson49.vue'
import Lesson62 from './Lessons/Lesson62.vue'
import Lesson76 from './Lessons/Lesson76.vue'

export default {
  name: 'Lesson',
  components: {
    Lesson33: Lesson33,
    Lesson34: Lesson34,
    Lesson49: Lesson49,
    Lesson62: Lesson62,
    Lesson76: Lesson76
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
