<template>
<div>
  <h3>v-once 初回だけテキストバインディングが行われる</h3>
  <p v-once>
    {{ message }}
  </p>

  <h3>v-onceなし</h3>
  <p>
    {{ message }}
  </p>
  <button v-on:click="clickHandler">Click!</button>

  <h3>v-pre 要素とすべての子要素のコンパイルをスキップ</h3>
  <p v-pre>
    {{ message }}
  </p>

  <h3>v-html プレーンなHTMLを挿入したい</h3>
  <p v-html="html">
  </p>

  <h3>v-cloak コンパイル前のテンプレートが表示されてしまうのを防ぐ</h3>
  <p v-cloak>
    {{ message }}
  </p>
  <h3>v-cloak なし</h3>
  <p>
    {{ message }}
  </p>

  <h3>v-text Mustacheの代わり</h3>
  <p v-text="message">
  </p>

  <h3>Mustacheタグはバインディング式</h3>
  <p v-pre>
    {{number + 1}}
  </p>
  <p>
    {{number + 1}}
  </p>
</div>
</template>

<script>

export default {
  name: 'Lesson76',
  props: {
    commonSettings: Object,
    componentName: String
  },
  data: function () {
    return {
      message: 'Hello Vue.js!',
      html: 'Hello <span style="color:red;">Vue.js!</span>',
      number: 100
    }
  },
  methods: {
    clickHandler: function (event) {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style>
  [v-cloak] {
    display: none
  }
</style>
