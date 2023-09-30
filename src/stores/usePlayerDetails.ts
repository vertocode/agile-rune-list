import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { API } from '@/api'

interface State {
    details: any
}

const api = new API()
export const usePlayerDetails = defineStore('playerDetails', () => {
    const state: State = reactive({
        details: []
    })

    const getPlayerDetails = async (nickname: number) => {
        interface Response {
            data: {
                player: any
            }
        }

        const response: Response = await api.get(`/player-detail/${nickname}`)
        state.details = response.data.player
    }


    return {
        state,
        getPlayerDetails
    }
})
