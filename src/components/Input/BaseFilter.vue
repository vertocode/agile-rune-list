<template>
  <div class="base-filter">
    <label class="filter-label">{{ label }}</label>
    <input v-model="value" class="filter-input" @input="handleInput" />
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import type { Ref } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  }
})

const value: Ref<string> = ref('')

const emits = defineEmits<{
  (e: 'input:value', value: Ref<string> | string): void
}>()

const handleInput = () => {
  emits('input:value', value.value)
}

</script>

<style scoped>
.base-filter {
  margin-bottom: 20px;
}

.filter-label {
  font-size: 18px;
  color: #333;
}

.filter-input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  width: 100%;
  box-sizing: border-box;
}
</style>
