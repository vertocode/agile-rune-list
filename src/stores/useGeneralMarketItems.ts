import { reactive } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

interface Category {
    label: string
    id: number
}

interface State {
    items: Array<any>
    filteredCategories: Category[]
}

const categories: Category[] = [
    { label: 'Miscellaneous', id: 0 },
    { label: 'Ammo', id: 1 },
    { label: 'Arrows', id: 2 },
    { label: 'Bolts', id: 3 },
    { label: 'Construction materials', id: 4 },
    { label: 'Construction products', id: 5 },
    { label: 'Cooking ingredients', id: 6 },
    { label: 'Costumes', id: 7 },
    { label: 'Crafting materials', id: 8 },
    { label: 'Familiars', id: 9 },
    { label: 'Farming produce', id: 10 },
    { label: 'Fletching materials', id: 11 },
    { label: 'Food and Drink', id: 12 },
    { label: 'Herblore materials', id: 13 },
    { label: 'Hunting equipment', id: 14 },
    { label: 'Hunting Produce', id: 15 },
    { label: 'Jewellery', id: 16 },
    { label: 'Mage armour', id: 17 },
    { label: 'Mage weapons', id: 18 },
    { label: 'Melee armour - low level', id: 19 },
    { label: 'Melee armour - mid level', id: 20 },
    { label: 'Melee armour - high level', id: 21 },
    { label: 'Melee weapons - low level', id: 22 },
    { label: 'Melee weapons - mid level', id: 23 },
    { label: 'Melee weapons - high level', id: 24 },
    { label: 'Mining and Smithing', id: 25 },
    { label: 'Potions', id: 26 },
    { label: 'Prayer armour', id: 27 },
    { label: 'Prayer materials', id: 28 },
    { label: 'Range armour', id: 29 },
    { label: 'Range weapons', id: 30 },
    { label: 'Runecrafting', id: 31 },
    { label: 'Runes, Spells and Teleports', id: 32 },
    { label: 'Seeds', id: 33 },
    { label: 'Summoning scrolls', id: 34 },
    { label: 'Tools and containers', id: 35 },
    { label: 'Woodcutting product', id: 36 },
    { label: 'Pocket items', id: 37 },
    { label: 'Stone spirits', id: 38 },
    { label: 'Salvage', id: 39 },
    { label: 'Firemaking products', id: 40 },
    { label: 'Archaeology materials', id: 41 }
]
export const useGeneralMarketItems = defineStore('generalMarketItems', () => {
    const state: State = reactive({
        items: [],
        filteredCategories: categories
    })

    const filterCategories = (value: Ref<string> | string) => {
        state.filteredCategories = categories.filter((category: Category) => {
            const typedValue = String(typeof value === 'string' ? value.toUpperCase() : value.value.toUpperCase())
            const filteredLabel = category.label.toUpperCase().includes(typedValue)
            const filteredId = String(category.id) === typedValue
            return filteredLabel || filteredId
        })
    }

    return {
        state,
        categories,
        filterCategories
    }
})
