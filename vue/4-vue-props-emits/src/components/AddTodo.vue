<script setup lang="ts">
import { ref, defineEmits } from "vue";

const todoText = ref("");

const handleSubmit = () => {
  console.log("Submit", todoText.value);
  emit("createTodo", todoText.value);
  todoText.value = "";
};

const emit = defineEmits<{
  (e: "createTodo", text: string): void;
}>();
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="todoText" />
    <button>Spara</button>
  </form>
</template>
