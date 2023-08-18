<template>
  <div class="error-toast">
    <p>🔴 Server Error 🔴</p>
    <p>Oh no! It seems we encountered a server problem while trying to process your request. We apologize for the inconvenience.</p>
    <p>Please try again later. Our team has been notified about the issue and is working to resolve it as soon as possible.</p>
    <button @click="tryAgain">Try Again</button>
    <p>We appreciate your patience and understanding.</p>
  </div>
</template>

<script setup lang="ts">

const tryAgain = (): void => {
  window.location.reload()
}
</script>

<style scoped>
.error-toast {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  background-color: #ff3333;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.error-toast p {
  margin: 10px 0;
}
.error-toast button {
  padding: 8px 20px;
  background-color: #fff;
  color: #ff3333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
