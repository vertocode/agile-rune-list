<template>
  <div class="category-card">
    <div class="category-title">{{ title }}</div>
    <div class="category-id">ID: {{ id }}</div>
    <button class="open-button">Open Items</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    id: Number
  }
};
</script>

<style scoped>
.category-card {
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
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
  background-color: #ff9900;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.open-button:hover {
  background-color: #e68a00;
}
</style>
