import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import userOperations from '@/services/userApi';
const userApi = new userOperations()

export const userOperationsStore = defineStore('user', () => {
    const state = reactive({
        registerStatus: null,
        userData: []
    });
    
    const registerStatus = computed(() => state.registerStatus);
    const userData = computed(() => state.userData)

    const registerUser = async (email, password, name) => {
        const data = await userApi.registerUser(email, password, name);
        state.registerStatus = data;
    };

    const loginUser = async (email, password) => {
        try {
            const response = await userApi.loginUser(email, password);
            state.userData = response;
        } catch (error) {
            console.log(error)
        }
    }

    return { userData, registerStatus, registerUser, loginUser };
})