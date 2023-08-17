<template>
  <div class="item-modal" v-if="item">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <button class="close-button" @click="closeModal">X</button>
      <div class="item-details">
        <img :src="item.icon_large" alt="Item Icon" class="item-icon" />
        <div class="item-info">
          <h2 class="item-name">{{ item.name }}</h2>
          <p class="item-description">{{ item.description }}</p>
          <div class="price-info">
            <p class="current-price">Current Price: {{ item.current.price }}</p>
            <p :class="['price-trend', item.today.trend]">{{ item.today.price }}</p>
          </div>
          <p class="item-type">Item Type: {{ item.type }}</p>
          <p class="members-only">Members Only: {{ item.members }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.item-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.modal-content {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  max-width: 90%;
  z-index: 2;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: #777;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #333;
}

.item-details {
  display: flex;
  align-items: center;
  padding: 20px;
}

.item-icon {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

.item-info {
  flex: 1;
}

.item-name {
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
}

.item-description {
  margin-bottom: 15px;
  font-size: 18px;
  color: #555;
}

.price-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.current-price {
  font-size: 20px;
  margin-right: 10px;
}

.price-trend {
  font-size: 20px;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.neutral {
  color: gray;
}

.item-type,
.members-only {
  font-size: 18px;
  color: #777;
}
</style>
