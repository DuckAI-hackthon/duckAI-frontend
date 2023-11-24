import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import catchKeyWordsApi from '@/services/keysApi';
const keyWordApi = new catchKeyWordsApi();

export const keyWordFetchStore = defineStore('keyWord', () => {
    const state = reactive({
        catchedKeyWords: null,
    });

    const catchedKeyWords = computed(() => state.catchedKeyWords);

    const getKeyWords = async (text) => {
        const data = await keyWordApi.catchKeyWords(text);
        state.catchedKeyWords = data;
    };

    return { catchedKeyWords, getKeyWords }
})