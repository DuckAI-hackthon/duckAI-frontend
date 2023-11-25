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
                const data = await othersService.postTranslate(text, to_lang, from_lang, user_id, ai, 2);
                return data;
            } catch (error) {
                console.log(error)
            }
        },
        async postGeneratorText(text, user_id, ai) {
            try {
                const data = await othersService.postGeneratorText(text, user_id, ai, 3);
                return data;
            } catch (error) {
                console.log(error)
            }
        },

        async postKeyGenerator(keyword, text, user_id, ai) {
            try {
                //console.log(keyword, text, user_id, ai)
                const data = await othersService.postGenereatorKeyword(keyword, text, user_id, ai, 4);
                console.log(keyword)
                return data;
            } catch (error) {
                console.log('oi');
                console.log(error)
            }
        }
    }
})