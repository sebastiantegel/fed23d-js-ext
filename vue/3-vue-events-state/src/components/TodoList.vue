<script setup lang="ts">
import { Todo } from "@/models/Todo";
import { ref } from "vue";

const handleInput = (e: any) => {
  todoText.value = e.target.value;
};

const addTodo = () => {
  todos.value.push(new Todo(todoText.value));
  todoText.value = "";
};

const toggleTodo = (id: number) => {
  //   todos.value[i].done = !todos.value[i].done;
  const foundTodo = todos.value.find((todo) => todo.id === id);
  if (foundTodo) {
    foundTodo.done = !foundTodo?.done;
  }
};

const removeTodo = (id: number) => {
  //   todos.value.splice(i, 1);
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

const todos = ref<Todo[]>([]);
const todoText = ref("");
</script>

<template>
  <div>
    <input type="text" :value="todoText" @input="handleInput" />
    <button @click="addTodo">Spara</button>
  </div>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span :class="todo.done ? 'done' : ''">{{ todo.text }}</span>
      <button @click="() => toggleTodo(todo.id)">Ändra</button>
      <button @click="() => removeTodo(todo.id)">Ta bort</button>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li > span.done {
  text-decoration: line-through;
}
</style>
