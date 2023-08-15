import { reactive } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '@/api'
import type { RouteParamValue } from 'vue-router'

interface Category {
    label: string
    id: number
}

interface State {
    items: Array<any>
    filteredCategories: Category[]
}

const api = new API()
export const useGeneralMarketItems = defineStore('generalMarketItems', () => {
    const state: State = reactive({
        items: [],
        filteredCategories: []
    })

    const getCategories = async (): Promise<void> => {
        const { data } = await api.get(`/categories`)
        state.filteredCategories = data
    }

    const filterCategories = (value: Ref<string> | string) => {
        state.filteredCategories = state.filteredCategories.filter((category: Category) => {
            const typedValue = String(typeof value === 'string' ? value.toUpperCase() : value.value.toUpperCase())
            const filteredLabel = category.label.toUpperCase().includes(typedValue)
            const filteredId = String(category.id) === typedValue
            return filteredLabel || filteredId
        })
    }

    const getItemsByCategory = async (categoryId: string | number | RouteParamValue[]) => {
        return await api.get(`/items/${categoryId}`)
    }

    return {
        state,
        getCategories,
        filterCategories,
        getItemsByCategory
    }
})
