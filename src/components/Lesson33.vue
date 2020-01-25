<template>
  <div>
    <p>{{ messsge }}</p>
    <ul>
      <li>
        <a v-bind:href="url" v-if="toggle">Vue.js</a>
      </li>
      <li>
        <a v-bind:href="top">TOP</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Lesson33",
  data() {
    return {
      messsge: "Hello World!",
      url: "https://jp.vuejs.org/",
      top: "http://localhost:8080/",
      toggle: true,
    };
  }
};
</script>
