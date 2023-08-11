<template>
  <CardHome>
    <h1 class="card-title">RUNE FAST WIKI</h1>

    <h3>Remember the <span class="gold">g(old)</span> times.</h3>

    <p class="explore-text">
      Unleash the potential of our menu and embark on a journey to unveil a plethora of insights and functionalities. From unraveling player rankings to effortlessly surveying market items, our app sets the stage for an enriched RuneScape adventure.
    </p>

    <div class="content">
      <div class="game-access">
        <div class="launcher">
          <a :href="links.launcher" target="_blank">
            <img src="../assets/home/jagex-launcher.jpeg" alt="launcher">
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
        <div class="rune-img">
          <div class="play-now">
            <a class="play-button" target="_blank" href="https://play.runescape.com/">Play Now</a>
          </div>
          <div>
            <img  src="../assets/home/armour-player.png" alt="player-img">
          </div>
        </div>
      </div>
    </div>

  </CardHome>
</template>

<script lang="ts" setup>

import CardHome from '@/components/Card/CardHome.vue'

const links = {
  launcher: 'https://www.jagex.com/en-US/launcher#_ga=2.246409607.22203394.1691451132-228848729.1691108041',
  member: 'https://rs.runescape.com/en-US/membership#_ga=2.73330064.22203394.1691451132-228848729.1691108041',
  oldSchool: 'https://oldschool.runescape.com/l=3/#_ga=2.139775280.22203394.1691451132-228848729.1691108041'
}
</script>

<style lang="scss">
.card {
  &-title {
    text-align: center;
    margin-top: 1.3em;
    color: #f1be2d; /* Orange color */
  }

  .explore-text {
    text-align: center;
    font-family: 'Open Sans', sans-serif; /* Modern font */
    font-size: 1rem;
    line-height: 1.6;
    margin: 2rem 0;
  }

  h3 {
    margin-top: 2em;
    text-align: center;

    .gold {
      color: #F7BE3D; /* Orange color */
    }
  }

  h2 {
    padding: 1em;
    text-align: center;
    color: white; /* Orange color */
  }

  .content {
    padding: 4em;
    display: flex;
    justify-content: space-evenly;

    @keyframes playerArmourAnimation {
      0% {
        transform: perspective(5000px) rotateX(-0.2deg);
      }
      100% {
        transform:  perspective(20px) rotateX(0deg);
      }
    }

    .rune-img {
      img  {
        max-width: 300px;
      }

      .play-now {
        width: 200px;
        position: absolute;
        top: -15%; /* Adjust as needed */
        left: 72%; /* Center horizontally */
        transform: translateX(-50%); /* Center horizontally */
        text-align: center;
      }

      .play-button {
        background-color: #f1be2d; /* Orange color */
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
      }

      .play-button:hover {
        background-color: #e69915; /* Slightly darker shade of orange on hover */
      }

      animation: playerArmourAnimation 1s infinite alternate; /* Apply a smooth transition effect */

      &:hover {
        transform: translate(20px);
      }
    }



    .rune-img:hover {
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
