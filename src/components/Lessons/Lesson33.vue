<template>
  <div class="lesson">
    <p>{{componentName}}</p>
    <ul>
      <li id="link_display_space">
        <a v-bind:href="commonSettings.vueOfficial" v-show="display">Vue.js</a>
      </li>
    </ul>
    <button id="display_botton" v-on:click="linkDisplay">{{ buttonName }}</button>
    <div class="description">
    <p>v-on:click="linkDisplay"が付加</p>
    <p>linkDisplayでは表示のフラグとボタンの文字の切替を行う</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Lesson33',
  props: {
    commonSettings: Object,
    componentName: String
  },
  methods: {
    linkDisplay: function () {
      if (this.display) {
        this.buttonName = 'リンクを表示'
        this.display = false
      } else {
        this.buttonName = 'リンクを非表示'
        this.display = true
      }
    }
  },
  data () {
    return {
      display: true,
      buttonName: 'リンクを非表示'
    }
  }
}
</script>
