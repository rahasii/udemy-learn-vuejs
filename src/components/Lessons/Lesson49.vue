<template>
  <div class="lesson">
    <p>{{componentName}}</p>
    <hr>
    <h2>ToDo List</h2>
    <form v-on:submit.prevent>
      <input type="text" v-model="newItem">
      <button v-on:click="addItem">Add</button>
    </form>
    <ul id="todoList">
      <li v-for="(todo,key) in todos" v-bind:key="key">
        {{ todo.item }}
      </li>
    </ul>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>

export default {
  name: 'Lesson49',
  props: {
    commonSettings: Object,
    componentName: String
  },
  data () {
    return {
      data: {},
      newItem: '',
      todos: []
    }
  },
  methods: {
    addItem: function (event) {
      console.log(event)
      if (this.newItem === '') return
      var todo = {
        item: this.newItem
      }
      this.todos.push(todo)
      this.newItem = ''
    }
  }
}
</script>
