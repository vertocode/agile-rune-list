<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #f3f5f9;
  margin: 3.5em auto;
  max-width: 80%;
  border: 1px solid #333; /* Darker border color */
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Helvetica', sans-serif; /* Modern font */
  padding: 1.5em;
}

/* Other styling for the card component goes here */
</style>
