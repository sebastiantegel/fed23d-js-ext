<script setup lang="ts">
import { ref } from "vue";

const handleClick = () => {
  age.value++;
};

const age = ref(44);
</script>

<template>
  <span>{{ age }}</span>
  <div>
    <button @click="handleClick">Ändra</button>
  </div>
</template>
