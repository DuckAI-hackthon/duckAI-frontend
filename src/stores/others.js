import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import othersService from '@/services/others'

export const useOtherStore = defineStore('other', {
    state: () => ({
        ais: useStorage('ais' ,[])
    }),
    actions: {
        async getAis() {
            try {
                const data = await othersService.getAis();
                this.ais = data;
            } catch (error) {
                console.log(error)
            }
        },
        async postTranslate(text, to_lang, from_lang, user_id, ai) {
            try {
                console.log(text, to_lang, from_lang, user_id, ai)
                const data = await othersService.postTranslate(text, to_lang, from_lang, user_id, ai, 2);
                console.log(data)
                return data;
            } catch (error) {
                console.log(error)
            }
        }
    }
})