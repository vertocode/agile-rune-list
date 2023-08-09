<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  color: white;
  background-color: var(--primary-color);
  margin: 3.5em auto;
  max-width: 80%;
  border: 1px solid black;
  border-radius: 20px;
}
</style>