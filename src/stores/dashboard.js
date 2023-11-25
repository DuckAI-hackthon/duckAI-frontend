import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

export const dashboardStore = defineStore('dashboard', () => {
    const state = reactive({
        mainContent: 'InfoTools',
        selectAI: 'chatgpt',
    });

    const mainContent = computed(() => state.mainContent);
    const selectAI = computed(() => state.selectAI);

    const changeContentTo = (slug) => {
        state.mainContent = slug;
    };

    const changeAiTo = (slug) => {
        state.selectAI = slug;
    };
    return { changeContentTo, mainContent, changeAiTo, selectAI };
});
