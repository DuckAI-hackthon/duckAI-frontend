import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

export const dashboardStore = defineStore('dashboard', () => {
    const state = reactive({
        mainContent: 'InfoTools',
    });

    const mainContent = computed(() => state.mainContent);

    const changeContentTo = (slug) => {
        state.mainContent = slug;
    };
    return { changeContentTo, mainContent };
});
