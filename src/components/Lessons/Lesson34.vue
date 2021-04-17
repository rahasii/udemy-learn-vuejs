<template>
  <div class="lesson">
    <p>{{componentName}}</p>
    <div class="description">
    <p>v-for 繰り返しの描画</p>
    </div>
    <ul>
      <!-- <li v-for="language in languages">{{language}}</li> -->
      <!-- Elements in iteration expect to have 'v-bind:key' directives -->
      <li v-for="(language , key) in languages" :key="key">{{language}}</li>
    </ul>
    <ul>
      <div class="description">
        <p>v-model 双方向データバインディング</p>
      </div>
    </ul>
    <ul>
      <button v-on:click="clickHandler">{{buttonName}}</button>
    </ul>
    <ul>
      <input type="text" v-model="message" />
    </ul>
    <ul>
      <p>入力中の文字：{{message}}</p>
    </ul>
    <ul>
      <div class="description">
        <p>Lesson31 compornent</p>
      </div>
    </ul>
    <ul>
      <template>
        <Hello></Hello>
      </template>
    </ul>
  </div>
</template>

<script>

import Hello from './../Hello.vue'

export default {
  components: {
    Hello: Hello
  },
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
      buttonName: 'Helloを入力する'
    }
  },
  methods: {
    clickHandler: function () {
      this.message = 'Hello'
    }
  }
}
</script>
