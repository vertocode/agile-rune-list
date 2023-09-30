<template>
  <div class="autocomplete">
    <select v-model="selectedOption">
      <option value="" disabled>{{ label }}</option>
      <option
          v-for="(option, index) in options"
          :key="index"
          :value="option"
          @click="updateOption(option)"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Props
defineProps({
  options: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    default: 'Select an option...'
  }
})
const emits = defineEmits(['updateOption'])
const selectedOption = ref('')

watch(selectedOption, () => {
  emits('updateOption', selectedOption.value)
})

</script>

<style scoped lang="scss">
.autocomplete {
  position: relative;

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .autocomplete-options {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

    li {
      padding: 10px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
}
</style>
