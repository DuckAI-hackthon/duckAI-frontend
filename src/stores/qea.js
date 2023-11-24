import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import getAnswerApi from '@/services/qeaApi';
const answerApi = new getAnswerApi()

export const QEAFetchStore = defineStore('qea', () => {
    const state = reactive({
        answerResult: null,
    });
    
    const answerResult = computed(() => state.answerResult);

    const getAnswer = async (text) => {
        const data = await answerApi.getAnswer(text);
        state.answerResult = data;
    };

    return { answerResult, getAnswer };
})

