<template>
  <div class="general-market-items">
    <h1>All items according to the "{{ selectedCategory }}" category:</h1>
    <div class="list-content">
      <BaseFilter label="Search by item name" @input:value="store.filterCategories"/>
      <div class="list" v-if="store.state.items.length">
        <ItemCard
            v-for="{ label, id } in store.state.items"
            :key="id"
            :title="label"
            :id="id"
        />
      </div>
      <NoCategory title-type="items" v-else />
    </div>
  </div>
</template>

<script setup lang="ts">

import { useGeneralMarketItems } from "@/stores/useGeneralMarketItems";
import ItemCard from "@/components/GeneralMarket/ItemCard.vue";
import BaseFilter from "@/components/Input/BaseFilter.vue";
import NoCategory from "@/components/GeneralMarket/NoCategory.vue";
import {computed, onBeforeMount, ref} from "vue";
import { useRoute} from "vue-router";
import type { RouteParamValue } from 'vue-router'

const store = useGeneralMarketItems()
const route = useRoute()
const id: string | RouteParamValue[] = route.params.id
const items = ref([])

const selectedCategory = computed(() => {
  const [category] = store.state.filteredCategories.filter(cateogory => cateogory.id === Number(id))
  return category.label
})

onBeforeMount(async () => {
  items.value = await store.getItemsByCategory(id)
})


</script>

<style lang="scss">
.general-market-items {
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