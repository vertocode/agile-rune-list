<template>
  <CardHome>
    <h1>RUNE FAST WIKI</h1>
    <h2>Experience our fast and user-friendly app for quick access to item data, player rankings, profiles, and clan standings. Elevate your gaming with essential insights at your fingertips.</h2>

    <h4>Remember the <span class="gold">g(old)</span> times.</h4>
    <div class="content">
      <div class="game-access">
        <div class="launcher">
          <a :href="links.launcher" target="_blank">
            <img src="../assets/home/jagex-launcher.jpeg" alt="laucher">
          </a>
          <p>
            The Jagex Launcher remembers your accounts, so there's no need to enter your password each time you play. You can add up to 20 different RuneScape or Old School accounts and quickly switch between them. If you're an Old School player, you can also choose to play using the official client or RuneLite.
          </p>
        </div>

        <div class="members">
          <a :href="links.member" target="_blank">
            <img src="../assets/home/members.png" alt="members">
          </a>

          <p>Unlock advantages as a member: easy account access with Jagex Launcher, manage up to 20 accounts, quick switches. Choose official client or RuneLite. Gain exclusive content, special skills, extended storylines, unique activities. Enjoy enhanced combat, robust economy, personal housing. Join a vibrant community, exclusive events. Embrace regular updates. Transform your gaming with convenience, community, and diverse gameplay.</p>

        </div>

        <div class="oldSchool">
          <a :href="links.oldSchool" target="_blank">
            <img src="../assets/home/runescape-os.jpeg" alt="runescape">
          </a>

          <p>Immerse yourself in Old School RuneScape, an engaging and nostalgic online multiplayer game. Traverse a medieval fantasy world filled with quests, challenges, and diverse environments. Embark on epic adventures, encounter mythical creatures, and master a range of skills. With the Jagex Launcher, manage accounts efficiently and switch between up to 20 characters seamlessly. Experience the freedom to play your way—choose the official client or RuneLite. Old School RuneScape offers a vibrant community, regular updates, and a treasure trove of memorable experiences.</p>
        </div>
      </div>

      <div>
        <div>
          <img class="rune-img" src="../assets/home/player.png" alt="player-img">
        </div>
      </div>
    </div>

  </CardHome>
</template>

<script lang="ts" setup>

import CardHome from "@/components/card/CardHome.vue";

const links = {
  launcher: 'https://www.jagex.com/en-US/launcher#_ga=2.246409607.22203394.1691451132-228848729.1691108041',
  member: 'https://rs.runescape.com/en-US/membership#_ga=2.73330064.22203394.1691451132-228848729.1691108041',
  oldSchool: 'https://oldschool.runescape.com/l=3/#_ga=2.139775280.22203394.1691451132-228848729.1691108041'
}
</script>

<style lang="scss">
.card {
  h1 {
    text-align: center;
    margin-top: 1.3em;
  }
  h4 {
    margin-top: 2em;
    text-align: center;

    .gold {
      color: #F7BE3D;
    }
  }

  h2 {
    padding: 1em;
    text-align: center;
    color: #F7BE3D;
  }

  .content {
    padding: 4em;
    display: flex;
    justify-content: space-evenly;

    .rune-img {
      width: 200px;
    }

    .game-access {
      display: flex;
      flex-wrap: wrap;
      gap: 5em;
      justify-content: space-around;

      p {
        max-width: 300px;
      }
    }
  }
}
</style>