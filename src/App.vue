<template>
  <div class="app">
    <Navbar />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">

import Navbar from "@/components/Navbar.vue";
</script>

<style scoped>
.app {
  min-height: 100vh;
}
</style>
