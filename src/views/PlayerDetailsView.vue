<template>
  <div class="player-details">
    <div class="search-form">
      <input v-model="playerNickname" placeholder="Enter Player Nickname *" />
      <button @click="searchPlayerDetails" :disabled="!playerNickname">Search</button>
    </div>
    <div class="loading-spinner" v-if="loading">
      <LoadingSpinner />
    </div>
    <div class="no-player" v-else-if="loading || !player?.name">
      <p>No player with the entered nickname found.</p>
    </div>
    <div class="player-card" v-else>
      <h2 class="card-title">{{ player.name }}</h2>
      <div class="card-content">
        <p v-if="player?.rank"><strong>Rank:</strong> {{ player.rank }}</p>
        <p v-if="player?.score"><strong>Score:</strong> {{ player.score }}</p>
      </div>
    </div>
    <ErrorToast v-if="showError"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoadingSpinner from '@/components/Spinner/LoadingSpinner.vue'
import ErrorToast from "@/components/Toast/ErrorToast.vue";
import { usePlayerDetails } from '@/stores/usePlayerDetails'
const playerNickname = ref('')
const player = ref(null)
const loading = ref(false)
const showError = ref(false)

const store = usePlayerDetails()

const searchPlayerDetails = async () => {
  loading.value = true
  setTimeout(async () => {
    try {
      await store.getPlayerDetails(playerNickname.value)
    } catch (e) {
      player.value = {
        name: 'Error'
      }
      showError.value = true
    } finally {
      loading.value = false
    }
  }, 1500)
};
</script>

<style scoped lang="scss">
.player-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;

  .search-form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
      width: 100%;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #f1be2d;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #fdb601;
      }
      &[disabled] {
        background-color: gray;
        cursor: auto;
      }
    }
  }

  .player-card {
    background-color: #2c2c2c;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 400px;
    text-align: center;
    margin: 0 auto;

    .card-title {
      font-size: 24px;
      font-weight: bold;
      color: #f1be2d;
      margin-bottom: 10px;
    }

    .card-content {
      font-size: 18px;
      color: #fff;
      p {
        margin: 10px 0;
      }
    }
  }

  .no-player {
    background-color: #f1be2d;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 400px;
    text-align: center;
    margin: 0 auto;
    font-size: 18px;
    color: #2c2c2c;

    p {
      margin: 10px 0;
    }
  }
}
</style>
