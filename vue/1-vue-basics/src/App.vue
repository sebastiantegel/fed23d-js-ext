<script setup lang="ts">
import { Todo } from "./models/Todo";

const message = "Star wars";
const year = 1977;
const jedi = { name: "Luke", color: "Blue" };

const showHeading = true;

const numbers: number[] = [1, 1, 2, 3, 5, 8];

const todos: Todo[] = [
  new Todo(1, "Learn vue", false),
  new Todo(2, "Learn react", false),
];

let loading = false;

const handleClick = () => {
  console.log("Running click event");
  loading = !loading;
};
</script>

<template>
  <h3 v-if="showHeading">{{ message }}</h3>
  <p v-else>{{ year }}</p>
  <div>
    <h4>{{ jedi.name }}</h4>
    <label>Lightsaber color:</label>
    <span>{{ jedi.color }}</span>
  </div>

  <ul>
    <li v-for="(n, i) in numbers" :key="i">{{ n }}</li>
  </ul>

  <div>
    <div v-for="todo in todos" :key="todo.id">
      <span>{{ todo.text }}</span>
      <button>Ändra</button>
      <button>Ta bort</button>
    </div>
  </div>

  <section v-if="loading">Laddar data...</section>
  <button @click="handleClick">Ändra loading</button>
</template>

<style scoped></style>
