<template>
  <div class="general-market">
    <h1>Select the Category of desired item:</h1>
    <LoadingSpinner v-if="isLoading"/>
    <div class="list-content" v-else>
      <ErrorToast v-if="showError"/>
      <BaseFilter label="Search by Category or ID" @input:value="store.filterCategories"/>
      <div class="list" v-if="store.state.filteredCategories.length">
        <CategoryCard
            v-for="{ label, id } in store.state.filteredCategories"
            :key="id"
            :title="label"
            :id="id"
        />
      </div>
      <NoCategory v-else/>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useGeneralMarketItems } from "@/stores/useGeneralMarketItems";
import CategoryCard from "@/components/GeneralMarket/CategoryCard.vue";
import BaseFilter from "@/components/Input/BaseFilter.vue";
import NoCategory from "@/components/GeneralMarket/NoCategory.vue";
import { onBeforeMount, ref } from "vue";
import LoadingSpinner from "@/components/Spinner/LoadingSpinner.vue";
import ErrorToast from "@/components/Toast/ErrorToast.vue";

const store = useGeneralMarketItems()
const isLoading = ref(true)
const showError = ref(false)

onBeforeMount(async () => {
  try {
    await store.getCategories()
  } catch (e) {
    showError.value = true
    console.error(e)
  }
  isLoading.value = false
})
</script>

<style lang="scss">
.general-market {
  background: linear-gradient(135deg, #222, #646464);
  color: white;

  h1 {
    text-align: center;
    font-size: 2.2rem;
    color: #f1be2d;
    margin-top: 1em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .list-content {
    padding: 2em;

    .base-filter {
      width: 60%;
      padding-bottom: 2em;
      margin: auto;

      input {
        background-color: transparent;
        border: 2px solid #f1be2d;
        border-radius: 5px;
        color: white;
        font-size: 1rem;
        padding: 10px;
        width: 100%;
        transition: border-color 0.3s ease;

        &:focus {
          outline: none;
          border-color: #e69915;
        }
      }
    }

    .list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2em;
    }
  }
}
</style>
