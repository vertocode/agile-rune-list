<template>
  <div class="rank-content">
    <div class="clan-ranking" :class="{ loading: !clans?.length }">
      <h1 class="ranking-title" v-if="selectedOption">The Top 50 RuneScape Clans in the "{{ selectedOption }}" Category</h1>
      <BaseAutocomplete class="ranking-category-autocomplete" @update-option="updateClansByCategory" :options="categoryLabels" label="Select a Category..."/>
      <ul class="ranking-list">
        <li class="ranking-header">
          <span class="ranking-position"><i>rank</i></span>
          <span class="ranking-player"><i>clan name</i></span>
          <span class="ranking-level"><i>score</i></span>
        </li>
        <li v-for="clan in clans" :key="clan.rank" class="ranking-item">
          <span class="ranking-position">{{ clan.rank }}</span>
          <span class="ranking-player">
            {{ clan.name }}
            <a href="#" class="see-details-link">See details</a>
          </span>
          <span class="ranking-level">{{ clan.score }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRankClans } from '@/stores/useRankClans'
import BaseAutocomplete from "@/components/Input/BaseAutocomplete.vue";
import { useGeneralMarketItems } from '@/stores/useGeneralMarketItems'

const rankStore = useRankClans()
const generalStore = useGeneralMarketItems()
const selectedOption = ref(generalStore.state.allCategories?.at(0)?.label || '')

const updateClansByCategory = async (categoryLabel: string) => {
  selectedOption.value = categoryLabel
  rankStore.state.clans = []
  if (!generalStore.state.allCategories.length) {
    await generalStore.getCategories()
  }
  const { id: categoryId } = generalStore.state.allCategories.find(category => category.label === categoryLabel)

  await rankStore.getClanRank(categoryId)
}

const categoryLabels = computed(() => generalStore.state.allCategories.map(category => category.label))

const clans = computed(() => rankStore.state.clans)

onMounted(async () => {
  await Promise.all([
    generalStore.getCategories(),
    rankStore.getClanRank(0),
  ])
  selectedOption.value = generalStore.state.allCategories?.at(0)?.label
})
</script>

<style scoped>
.rank-content {
  display: flex;
  justify-content: center;
  margin: 2em auto;
}

.clan-ranking {
  background-color: #2c2c2c;
  border-radius: 15px;
  padding: 20px;
  display: inline-block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  width: 700px;
  min-width: 300px;
}

.ranking-title {
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #f1be2d;
  margin: auto auto 10px;
}

.ranking-category-autocomplete {
  display: flex;
  justify-content: center;
}

.ranking-list {
  list-style: none;
  padding: 0;
}

.ranking-item {
  font-size: 18px;
  color: #fff;
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.ranking-position {
  margin-right: 10px;
  font-weight: bold;
}

.ranking-player {
  flex: 1;
}

.ranking-level {
  font-weight: bold;
  color: #f1be2d;
}

.ranking-header {
  font-size: 20px;
  font-weight: bold;
  color: #f1be2d;
  background-color: #2c2c2c;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.ranking-header i {
  font-style: normal;
}

.ranking-position,
.ranking-player,
.ranking-level {
  flex: 1;
  text-align: center;
  margin: 0;
}

.ranking-player {
  margin: 1em;
}

.see-details-link {
  word-wrap: break-word;
  color: #0077b6;
  text-decoration: none;
  margin-left: 10px;
  font-weight: bold;
}

.see-details-link:hover {
  text-decoration: underline;
}

.loading {
  text-align: center;
  color: #999;
  font-size: 18px;
}

.loading::after {
  content: "Loading...";
  display: block;
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
