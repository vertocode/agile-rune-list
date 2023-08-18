<template>
  <div class="category-card">
    <div class="category-title">{{ title }}</div>
    <div class="category-id">ID: {{ id }}</div>
    <button class="open-button" @click="openItems">Open Items</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Router } from "vue-router";

const router: Router = useRouter();

const props = defineProps({
  title: String,
  id: Number
});

const openItems = () => {
  router.push({ path: `/general-market-items/${props.id}` });
};
</script>

<style scoped>
.category-card {
  background-color: #2c2c2c;
  border: 1px solid #111; /* Darker black color */
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.category-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
}

.category-id {
  font-size: 18px;
  opacity: 0.8;
  color: #ccc;
}

.open-button {
  margin-top: 1em;
  background-color: #f1be2d;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.open-button:hover {
  background-color: #e69915;
}
</style>

