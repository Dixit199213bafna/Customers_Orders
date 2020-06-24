<template>
  <form class="col-12" @submit.prevent="addTodo()">
    <input
      v-model="newTodo"
      type="text"
      class="form-control"
      placeholder="Create New"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length > 0) {
        this.$emit('new-todo', this.newTodo);
      }
      this.newTodo = '';
    },
  },
};
</script>
