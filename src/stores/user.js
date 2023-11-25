import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import userOperations from '@/services/user';
const userApi = new userOperations()

export const userOperationsStore = defineStore('user', () => {
    const state = reactive({
        registerStatus: null,
    });
    
    const registerStatus = computed(() => state.registerStatus);

    const registerUser = async (email, password, name) => {
        const data = await userApi.registerUser(email, password, name);
        state.registerStatus = data;
    };

    return { registerStatus, registerUser };
})