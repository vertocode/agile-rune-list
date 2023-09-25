<template>
  <loading-spinner v-if="!players?.length"/>
  <div class="rank-content" v-else>
    <div class="player-ranking">
      <h1 class="ranking-title">RuneScape Player Ranking</h1>
      <ul class="ranking-list">
        <li class="ranking-header">
          <span class="ranking-position"><i>rank</i></span>
          <span class="ranking-player"><i>nickname</i></span>
          <span class="ranking-level"><i>score</i></span>
        </li>
        <li v-for="player in players" :key="player.rank" class="ranking-item">
          <span class="ranking-position">{{ player.rank }}</span>
          <span class="ranking-player">
            {{ player.name }}
            <a href="#" class="see-details-link">See details</a>
          </span>
          <span class="ranking-level">{{ player.score }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import LoadingSpinner from '@/components/Spinner/LoadingSpinner.vue'
import { computed, onMounted } from 'vue'
import { useRankPlayers } from '@/stores/useRankPlayers'

const rankStore = useRankPlayers()

const players = computed(() => rankStore.state.players)

onMounted(async () => {
  await rankStore.initializePlayerRank(0)
})
</script>

<style scoped>
.rank-content {
  display: flex;
  justify-content: center;
  margin: 2em auto;
}

.player-ranking {
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
</style>
