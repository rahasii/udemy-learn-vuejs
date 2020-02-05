// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Lesson62 from './components/Lessons/Lesson62.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#app-62',
  data: {
    bpi: null,
    check: 'test'
  },
  mounted: function () {
    Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(function (response) {
      // console.log(this.bpi)
      // console.log(self.bpi)
      this.bpi = response.data.bpi
      // console.log(response.data.bpi)
      // console.log(response.data.bpi.USD.rate_float)
      console.log(this.bpi)
    }.bind(this))
  },
  // computed: {
  //   // 算出 getter 関数
  //   b: function () {
  //     // `this` は vm インスタンスを指します
  //     // console.log(this)
  //     return this.bpi
  //   }
  // },
  components: { Lesson62 },
  template: '<Lesson62/>'
})
