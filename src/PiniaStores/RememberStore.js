import { defineStore } from 'pinia'

export const useRememberStore = defineStore('RememberStore' , {
    
    state: () => {
        return {
            last_username: 'Zaffa89'
        }
    }
});