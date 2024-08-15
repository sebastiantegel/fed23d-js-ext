<script setup lang="ts">
import type { Todo } from "@/models/Todo";
import { defineProps, defineEmits } from "vue";

type TodoPresentationProps = {
  todo: Todo;
};

defineProps<TodoPresentationProps>();

defineEmits<{
  (e: "changeTodo", id: number): void;
  (e: "deleteTodo", id: number): void;
}>();
</script>

<template>
  <div>
    <h4 :class="todo.done ? 'done' : ''">{{ todo.text }}</h4>
    <button @click="$emit('changeTodo', todo.id)">Ändra</button>
    <button @click="$emit('deleteTodo', todo.id)">Ta bort</button>
  </div>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
