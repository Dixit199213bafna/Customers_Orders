<template>
  <todo-list :app-name="$t('todo.title')" />
</template>

<script>
import TodoList from './ToDoList/ToDoList';

export default {
  name: 'todo',
  components: {
    TodoList,
  },
};
</script>
