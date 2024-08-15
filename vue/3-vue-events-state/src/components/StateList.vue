<script setup lang="ts">
import { Person } from "@/models/Person";
import { ref } from "vue";

const handleClick = () => {
  persons.value.push(new Person("Sebastian", 44, true));
};

const persons = ref<Person[]>([]);
</script>

<template>
  <div v-for="(person, i) in persons" :key="i">
    <h3>{{ person.name }}</h3>
    <p>{{ person.age }}</p>
    <input type="checkbox" :checked="person.isMarried" />
  </div>

  <div>
    <button @click="handleClick">Lägg till person</button>
  </div>
</template>
