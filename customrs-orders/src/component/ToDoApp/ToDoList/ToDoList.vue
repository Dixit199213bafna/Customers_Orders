<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>{{ appName }}</h1>
      </div>
    </div>
    <div class="row mb-3">
      <create-todo @new-todo="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in todoList"
            :key="index"
            :description="todo.description"
            @delete="deletingTodo(index)"
            @edit="editingTodo(index, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Todo from '../ToDo/ToDo';
import CreateTodo from '../CreateToDo/CreateToDo';

export default {
  props: {
    appName: String,
  },
  computed: {
    ...mapGetters({
      todoList: 'getTodoList',
    }),
  },
  methods: {
    ...mapActions({
      setTodoList: 'setTodo',
      createTodo: 'createTodo',
      editTodo: 'editTodo',
      deleteTodo: 'deleteTodo',
    }),
    addTodo(newTodo) {
      this.createTodo({ description: newTodo });
    },
    editingTodo(index, newTodoDescription) {
      this.editTodo({ index, description: newTodoDescription });
    },
    deletingTodo(index) {
      this.deleteTodo(index);
    },
  },
  mounted() {
    this.setTodoList([
      { description: 'Hi' },
      { description: 'Hello' },
      { description: 'Byeee!!!' },
    ]);
  },
  components: { Todo, CreateTodo },
};
</script>
