<template>
  <div class="general-market">
    <h1>Select the Category of desired item:</h1>
    <div class="list-content">
      <BaseFilter label="Search by Category or ID" @input:value="store.filterCategories"/>
      <LoadingSpinner v-if="isLoading"/>
      <div class="list" v-else-if="store.state.filteredCategories.length">
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

const store = useGeneralMarketItems()
const isLoading = ref(true)

onBeforeMount(async () => {
  await store.getCategories()
  isLoading.value = false
})
</script>

<style lang="scss">
.general-market {
  h1 {
    text-align: center;
  }

  .list-content {
    padding: 1em;

    .base-filter {
      width: 50%;
      padding-bottom: 2em;
      margin: auto;
    }

    .list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
      gap: 3em;
    }
  }
}
</style>