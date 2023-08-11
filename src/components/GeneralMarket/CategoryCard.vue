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

const { id } = defineProps({
  title: String,
  id: Number
});

const openItems = () => {
  router.push({ path: `/general-market-items/${id}` });
};
</script>

<style scoped>
.category-card {
  background-color: #f3f5f9;
  border: 1px solid #333; /* Darker black color */
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.category-id {
  font-size: 18px;
  opacity: 0.8;
}

.open-button {
  margin-top: 1em;
  background-color: #f7be3d;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.open-button:hover {
  background-color: #dbaa31;
}
</style>
