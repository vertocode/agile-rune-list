<template>
  <div class="content">
    <nav class="navbar">
      <div class="images">
        <img class="logo" src="@/assets/navbar/header_logo.png" alt="runescape-logo">
        <div class="sword-content">
          <img class="sword" src="@/assets/navbar/divine-sword.png" alt="sword-img">
          <div class="sword-trail"></div>
        </div>
      </div>

      <ul class="items">
        <li
            v-for="{ label, route } in navOptions"
            :key="route"
            :class="{ 'active-item': $route.path === route }"
            @click="changeRoute(route)"
        >
          {{ label }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">

import type { Ref } from 'vue'
import type { Router } from 'vue-router'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router: Router = useRouter()

const navOptions = [
  {
    label: 'Home',
    route: '/home'
  },
  {
    label: 'General Market',
    route: '/general-market'
  },
  {
    label: 'Player Rank',
    route: '/player-rank'
  },
  {
    label: 'Clan Rank',
    route: '/clan-rank'
  },
  {
    label: 'Player\'s Details',
    route: '/player-details'
  }
]
const selectedRoute: Ref<string> = ref('/home')
const changeRoute = (route: string) => {
  selectedRoute.value = route
  router.push({ path: route })
}
</script>

<style scoped lang="scss">
.content {
  background-color: var(--primary-color);
  box-shadow: rgba(247, 190, 61, 0.65) 0 1px 8px;
  z-index: 3;
}
.navbar {
  margin: auto;
  padding: 1em;
  max-width: 1600px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  position: relative;

  .images {
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo {
      width: 150px;
      z-index: 2;
    }

    .sword-content {
      max-width: 100%;
      display: flex;
      position: absolute;
      animation: swordMove 15s linear infinite alternate;
      bottom: 10%;
      opacity: 0.5;
      z-index: 1;
      .sword {
        position: absolute;
        width: 40px;
        height: 80px;
        animation: swordRotate 3s linear infinite;
        z-index: 1;
      }

      .sword-trail {
        text-align: center;
        top: 60%;
        left: 90%;
        position: absolute;
        width: 20px;
        height: 10px;
        background-color: #8B0000;
        border-radius: 30%;
        transform: translate(-50%, -50%) rotate(60deg);
        animation: trailAnimation 3s linear infinite;

        z-index: 1;
      }

      @keyframes trailAnimation {
        0%, 75%, 100% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
      }

      @keyframes swordRotate {
        0% {
          transform: rotate(360deg);
        }
        50% {
          transform: rotate(180deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }

      @keyframes swordMove {
        0% {
          left: 0;
        }
        100% {
          left: 90%;
        }
      }
    }

  }

  .items {
    display: flex;
    justify-content: start;
    gap: 4em;

    li {
      z-index: 2;
      position: relative;

      list-style-type: none;
      color: white;
      cursor: pointer;
      font-family: "cinzel", "Times", "Times New Roman", serif;
      font-size: 1.7em;

      transition: opacity 0.3s ease;
      opacity: 1;

      &:hover {
        color: rgba(255, 255, 255, 0.44);
        opacity: 1;
      }
    }

    li.active-item {
      color: #F7BE3D;
    }

    ::after {
      content: "|";
      position: absolute;
      color: white;
      left: -1.3em;
      animation: fadeAnimation 2s ease-in alternate;
      opacity: 0.5;
      transform: rotate(25deg);
    }
  }
}

@keyframes fadeAnimation {
  from {
    opacity: 1;
    transform: rotate(0deg);
  }
  to {
    opacity: 0.5;
    transform: rotate(25deg);
  }
}
</style>