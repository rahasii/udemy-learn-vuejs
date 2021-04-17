// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Lesson62 from './components/Lessons/Lesson62.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// new Vue({
//   el: '#app-62',
//   components: { Lesson62 },
//   template: '<Lesson62/>'
// })
