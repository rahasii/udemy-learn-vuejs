<template>
  <div>
    <p>{{componentName}}</p>
    <hr />
    <ul>
      <!-- <li v-for="language in languages">{{language}}</li> -->
      <!-- Elements in iteration expect to have 'v-bind:key' directives -->
      <li v-for="(language , key) in languages" :key="key">{{language}}</li>
    </ul>
    <hr />
    <ul>
      <p>{{message}}</p>
    </ul>
    <ul>
      <button v-on:click="clickHandler">{{buttonName}}!</button>
    </ul>
    <ul>
      <input type="text" v-model="message" />
    </ul>
    <ul>
      <li>
        <a v-bind:href="commonSettings.top">TOP</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Lesson34',
  props: {
    commonSettings: Object,
    componentName: String
  },
  data () {
    return {
      message: 'Hello Vuejs!',
      languages: ['JavaScript', 'Ruby', 'Python'],
      clicked: false,
      buttonName: 'Click'
    }
  },
  methods: {
    clickHandler: function () {
      if (this.clicked) {
        this.message = 'Hello Vuejs!'
        this.clicked = false
        this.buttonName = 'Click'
      } else {
        this.message = 'Clicked!'
        this.clicked = true
        this.buttonName = 'Return'
      }
    }
  }
}
</script>
