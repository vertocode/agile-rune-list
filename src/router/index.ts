import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GeneralMarketView from '@/views/GeneralMarketView.vue'
import PlayerRankView from '@/views/PlayerRankView.vue'
import ClanRankView from '@/views/ClanRankView.vue'
import PlayerDetailsView from '@/views/PlayerDetailsView.vue'
import GeneralMarketItemsView from "@/views/GeneralMarketItemsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/general-market',
      name: 'generalMarket',
      component: GeneralMarketView
    },
    {
      path: '/general-market-items/:id',
      name: 'generalMarketItems',
      component: GeneralMarketItemsView,
    },
    {
      path: '/player-rank',
      name: 'playerRank',
      component: PlayerRankView
    },
    {
      path: '/clan-rank',
      name: 'clanRank',
      component: ClanRankView
    },
    {
      path: '/player-details',
      name: 'playerDetails',
      component: PlayerDetailsView
    }
  ]
})

export default router
