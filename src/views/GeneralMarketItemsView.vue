<template>
  <div class="general-market-items">
    <div class="title-wrapper">
      <button class="back-button" @click="goBack">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="back-icon"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>
      <h1>All items according to the "{{ selectedCategory }}" category:</h1>
    </div>
    <LoadingSpinner v-if="isLoading"/>
    <div class="list-content" v-else>
      <BaseFilter label="Search by item name" @input:value="store.filterCategories"/>
      <div class="list" v-if="filteredItems?.length">
        <ItemCard
            v-for="(item, index) in filteredItems"
            :item="item"
            :key="index"
            @open-modal="selectedItem = item"
        />
      </div>
      <NoCategory title-type="items" v-else />
    </div>
    <ItemModal @close="selectedItem = {}" :item="selectedItem" v-if="selectedItem?.name"/>
  </div>
</template>

<script setup lang="ts">

import { useGeneralMarketItems } from "@/stores/useGeneralMarketItems";
import ItemCard from "@/components/GeneralMarket/ItemCard.vue";
import BaseFilter from "@/components/Input/BaseFilter.vue";
import NoCategory from "@/components/GeneralMarket/NoCategory.vue";
import {computed, onBeforeMount, ref} from "vue";
import { useRoute, useRouter } from "vue-router";
import type { RouteParamValue } from 'vue-router'
import LoadingSpinner from "@/components/Spinner/LoadingSpinner.vue";
import ItemModal from "@/components/Modal/ItemModal.vue";

const store = useGeneralMarketItems()
const route = useRoute()
const router = useRouter()
const id: string | RouteParamValue[] = route.params.id
const items = ref([])
const isLoading = ref(true)
const selectedItem: any = ref({})

const selectedCategory = computed(() => {
  const [category] = store.state.allCategories.filter(cateogory => cateogory.id === Number(id))
  if (!category) {
    goBack()
  }
  return category.label
})

const filteredItems = computed(() => {
  return items.value.filter(item => item)
})

const goBack = () => {
  router.push('/general-market')
}

onBeforeMount(async () => {
  if (!store.state.filteredCategories.length) {
    await store.getCategories()
  }
  items.value = await store.getItemsByCategory(id)
  isLoading.value = false
})


</script>

<style lang="scss">
.general-market-items {
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;

    .back-button {
      display: flex;
      align-items: center;
      background-color: #f7be3d;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 5px 10px;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      .back-icon {
        width: 1.2em;
        height: 1.2em;
        margin-right: 0.5em;
      }
    }

    .back-button:hover {
      background-color: #dbaa31;
    }

    h1 {
      text-align: center;
      margin-left: 1em; /* Adapte o valor conforme necessário */
    }
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