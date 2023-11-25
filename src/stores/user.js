import { defineStore } from 'pinia';
import userOperations from '@/services/userApi';

export const useUserStore = defineStore('user', {
    state: () => ({
        userData: [],
        loggedIn: false,
    }),
    actions: {
        async login(username, password) {
            const data = await userOperations.loginUser(username, password);
            console.log(data)
            this.userData = data;
            this.loggedIn = true;
        },
        // async logout() {
        //     const data = await userOperations.logout();
        //     this.userData = data;
        //     this.loggedIn = false;
        // },
        async register(email, password, name) {
            const data = await userOperations.registerUser(email, password, name);
            this.userData = data;
            this.loggedIn = true;
        }
    }
}
)