import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Lesson from '@/components/Lesson'

Vue.use(Router)

// Vue.component('button-counter', {
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// })

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Lesson/:number',
      name: 'Lesson',
      component: Lesson
    }
  ]
})
