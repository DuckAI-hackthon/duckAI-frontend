import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import getSummaryApi from '@/services/sumupApi';
const SummaryApi = new getSummaryApi()

export const summaryFetchStore = defineStore('summary', () => {
    const state = reactive ({
        summedText: null,
    });

    const summedText = computed(() => state.summedText);

    const getSummary = async (text) => {
        const data = await SummaryApi.getSummary(text);
        state.summedText = data;
    };

    return { summedText, getSummary }
})