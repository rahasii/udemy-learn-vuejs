<template>
  <div class="lesson">
    <p>{{componentName}}</p>
    <hr />
    <h2>ToDo List</h2>
    <form v-on:submit.prevent>
      <input type="text" v-model="newItem" />
      <button v-on:click="addItem">Add</button>
    </form>
    <ul id="todoList">
      <li v-for="(todo,index) in todos" v-bind:key="index">
        <input type="checkbox" v-model="todo.isDone" />
        <span v-bind:class="{done: todo.isDone}">{{ todo.item }}</span>
        <button v-on:click="deleteItem(index)">Delete</button>
      </li>
    </ul>
    <!-- <pre>{{ $data }}</pre> -->
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
      if (this.newItem === '') return
      var todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      this.newItem = ''
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style>
 #todoList li span.done{
  text-decoration: line-through
 }
</style>
