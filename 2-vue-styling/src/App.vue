<script setup lang="ts">
const todo = { text: "Lorem ipsum", done: false };
</script>

<template>
  <span :class="todo.done ? 'mytext' : ''">{{ todo.text }}</span>
</template>

<style scoped lang="scss">
.mytext {
  color: var(--vt-c-indigo);
  text-decoration: line-through;
}
</style>
