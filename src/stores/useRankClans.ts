import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { API } from '@/api'

interface Clan {
    name: string
    score: string
    rank: string
}

interface State {
    clans: Clan[]
}

const api = new API()
export const useRankClans = defineStore('rankClans', () => {
    const state: State = reactive({
        clans: []
    })

    const getClanRank = async () => {
        interface Response {
            data: {
                clans: Clan[]
            }
        }

        const response: Response = await api.get(`/rank-clans`)
        state.clans = response.data.clans
    }


    return {
        state,
        getClanRank
    }
})
