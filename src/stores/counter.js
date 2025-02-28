import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
    state: () => {
        return{
            count: 0,
            level: 0,
            title: "level is 0"
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
        tripleCount: (state) => state.count * 3

    },
    actions: {
        countUp() {
            this.count++
            if (this.count%5 == 0){
                this.level++
            }
        }
    }
})