<template>
  <div class="item-card">
    <div class="item-image">
      <img src="../../assets/home/player.png" alt="item-image">
    </div>
    <div class="item-content">
      <div class="item-title">{{ title }}</div>
      <div class="item-id">ID: {{ id }}</div>
      <button class="open-button">View Details</button>
    </div>
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
.item-card {
  background-color: #f3f5f9;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.item-card:hover {
  transform: translateY(-5px);
}

.item-image {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  margin-right: 20px;
}

.item-image img {
  max-width: 60px;
  max-height: 60px;
}

.item-content {
  flex: 1;
}

.item-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.item-id {
  font-size: 18px;
  opacity: 0.8;
  color: #555;
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
