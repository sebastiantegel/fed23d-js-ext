<script setup lang="ts">
import { Person } from "@/models/Person";
import { ref } from "vue";

const handleClick = () => {
  person.value.name = "Hanna";
  person.value.age = 40;
};

const person = ref<Person>(new Person("Sebastian", 44, true));
</script>

<template>
  <h3>{{ person.name }}</h3>
  <p>{{ person.age }}</p>
  <input type="checkbox" :checked="person.isMarried" />

  <div>
    <button @click="handleClick">Ändra</button>
  </div>
</template>
