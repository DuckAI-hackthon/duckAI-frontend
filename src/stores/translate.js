import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import getTranslationApi from '@/services/translateApi';
const translateApi = new getTranslationApi();

export const translateFetchStore = defineStore('translate', () => {
    const state = reactive({
        textTranslated: null,
    });

    const textTranslated = computed(() => state.textTranslated);
    
    const getTranslation = async (text, from, to) => {
        const data = await translateApi.getTranslation(text, from, to);
        state.textTranslated = data;
    };

    return { textTranslated, getTranslation}
})