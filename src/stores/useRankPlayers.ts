import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { API } from '@/api'

interface Player {
    name: string
    score: string
    rank: string
}

interface State {
    players: Player[]
}

const api = new API()
export const useRankPlayers = defineStore('rankPlayers', () => {
    const state: State = reactive({
        players: []
    })

    const initializePlayerRank = async (categoryId: number) => {
        interface Response {
            data: {
                players: Player[]
            }
        }

        const response: Response = await api.get(`/rank-players/${categoryId}`)
        state.players = response.data.players
    }


    return {
        state,
        initializePlayerRank
    }
})
