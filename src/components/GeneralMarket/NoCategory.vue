<template>
  <div class="no-categories">
    <div class="message">
      <p>Sorry, no {{ titleType }} were found for your search.</p>
      <p>Please try a different search term.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  titleType: {
    type: String,
    default: 'categories'
  }
})

</script>

<style scoped>
.no-categories {
  background-color: #f5f5f5;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.message {
  font-size: 18px;
  color: #333;
}
</style>
