<template>
  <div id="app-62">
    <ul>
      <li>
        <p >{{bpi}}</p>
      </li>
    </ul>
    <button v-on:click="console">console.log()</button>
  </div>
</template>

<script>
export default {
  name: 'Lesson62',
  props: {
    commonSettings: Object,
    componentName: String
    // bpi: Object
    // check: String
  },
  data () {
    return {
      bpi: this.$parent.bpi
      // bpi: null
    }
  },
  methods: {
    console: function () {
      console.dir(this)
      console.dir(this.$parent.bpi)
    }
  }
}
</script>
