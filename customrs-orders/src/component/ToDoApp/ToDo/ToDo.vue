<template>
  <li class="list-group-item">
    <button
      class="btn border-0"
      v-if="!isEditing"
    >
      <span>{{ description }}</span>
    </button>
    <form v-else @submit.prevent="finishEditing()">
      <input
        type="text"
        class="form-control"
        v-model="newTodoDescription"
        @blur="finishEditing()"
        ref="newTodo"
      />
    </form>
    <button
      @click="startEditing()"
      class="btn btn-outline-primary"
    >
      EDIT
    </button>
    <button @click="$emit('delete')" class="btn btn-outline-danger">
      DELETE
    </button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      newTodoDescription: '',
    };
  },
  props: {
    description: String,
  },
  methods: {
    startEditing() {
      if (this.isEditing) {
        this.finishEditing();
      } else {
        this.newTodoDescription = this.description;
        this.isEditing = true;
      }
    },
    finishEditing() {
      this.isEditing = false;
      this.$emit('edit', this.newTodoDescription);
    },
  },
};
</script>
