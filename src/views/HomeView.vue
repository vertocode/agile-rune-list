<template>
  <div class="home-container">
    <div class="home-content">
      <h1 class="home-title">RUNE FAST WIKI</h1>
      <h3 class="home-subtitle">Remember the <span class="gold">g(old)</span> times.</h3>
      <p class="home-description">
        Unleash the potential of our menu and embark on a journey to unveil a plethora of insights and functionalities. From unraveling player rankings to effortlessly surveying market items, our app sets the stage for an enriched RuneScape adventure.
      </p>
      <div class="game-access">
        <div class="launcher">
          <a :href="links.launcher" target="_blank">
            <img src="../assets/home/jagex-launcher.jpeg" alt="launcher">
          </a>
          <p class="access-description">
            The Jagex Launcher remembers your accounts, so there's no need to enter your password each time you play. You can add up to 20 different RuneScape or Old School accounts and quickly switch between them. If you're an Old School player, you can also choose to play using the official client or RuneLite.
          </p>
        </div>
        <div class="members">
          <a :href="links.member" target="_blank">
            <img src="../assets/home/members.png" alt="members">
          </a>
          <p class="access-description">
            Unlock advantages as a member: easy account access with Jagex Launcher, manage up to 20 accounts, quick switches. Choose the official client or RuneLite. Gain exclusive content, special skills, extended storylines, unique activities. Enjoy enhanced combat, a robust economy, personal housing. Join a vibrant community, exclusive events. Embrace regular updates. Transform your gaming with convenience, community, and diverse gameplay.
          </p>
        </div>
        <div class="oldSchool">
          <a :href="links.oldSchool" target="_blank">
            <img src="../assets/home/runescape-os.jpeg" alt="runescape">
          </a>
          <p class="access-description">
            Immerse yourself in Old School RuneScape, an engaging and nostalgic online multiplayer game. Traverse a medieval fantasy world filled with quests, challenges, and diverse environments. Embark on epic adventures, encounter mythical creatures, and master a range of skills. With the Jagex Launcher, manage accounts efficiently and switch between up to 20 characters seamlessly. Experience the freedom to play your way—choose the official client or RuneLite. Old School RuneScape offers a vibrant community, regular updates, and a treasure trove of memorable experiences.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        launcher: 'https://www.jagex.com/en-US/launcher#_ga=2.246409607.22203394.1691451132-228848729.1691108041',
        member: 'https://rs.runescape.com/en-US/membership#_ga=2.73330064.22203394.1691451132-228848729.1691108041',
        oldSchool: 'https://oldschool.runescape.com/l=3/#_ga=2.139775280.22203394.1691451132-228848729.1691108041'
      }
    };
  }
};
</script>

<style scoped lang="scss">
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #222, #646464);
}

.home-content {
  max-width: 1100px;
  padding: 4rem;
  text-align: center;
  color: white;
}

.home-title {
  font-size: 2.2rem;
  color: #f1be2d;
  margin-top: 1em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.home-subtitle {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #f1be2d;
}

.gold {
  color: #f1be2d;
}

.home-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.game-access {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.access-description {
  font-size: 1rem;
  line-height: 1.5;
  max-width: 350px;
  margin: 1.5rem 0;
}

.members img,
.oldSchool img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
</style>
