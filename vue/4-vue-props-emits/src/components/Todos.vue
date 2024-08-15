<script setup lang="ts">
import TodoPresentation from "./TodoPresentation.vue";
import type { Todo } from "@/models/Todo";
import { defineProps, defineEmits } from "vue";

interface ITodosProps {
  todos: Todo[];
}

const props = defineProps<ITodosProps>();
defineEmits<{
  (e: "toggleTodo", id: number): void;
  (e: "removeTodo", id: number): void;
}>();

console.log(props.todos.length);
</script>

<template>
  <div class="todos">
    <TodoPresentation
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @change-todo="(id: number) => $emit('toggleTodo', id)"
      @delete-todo="(id: number) => $emit('removeTodo', id)"
    ></TodoPresentation>
  </div>
</template>
