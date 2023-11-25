<script setup>
const email = ref(null)
const password = ref(null)
const ShowPassword = ref(false)

import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user'
import { ref } from 'vue';
const router = useRouter();
const userStore = useUserStore()
async function loginUser() {
    try {
        await userStore.login(email.value, password.value);
        router.push('/dashboard');
    } catch (error) {
        console.log('error', error);
    }
}
</script>

<template>
    <form class="flex-col-center gap-2" action="">
        <label>
            <p class="text-sm">E-mail</p>
            <input class="input-login my-1" type="email" v-model="email">
        </label>
        <label>
            <div class="flex flex-row just items-center justify-between	">
                <p class="text-sm">Senha</p>
                <p class="text-xs cursor-pointer" @click="ShowPassword = !ShowPassword">Mostrar</p>
            </div>
            <input class="input-login my-1" :type="ShowPassword ? 'text' : 'password'" v-model="password">
            <p class="text-xs text-zinc-500">Use 8 caracteres ou mais.</p>
        </label>
        <label class="flex-login gap-4 pt-4">
            <div class="btn-primary hover:bg-indigo-700" @click="loginUser">
                Login
            </div>      
            <p class="text-sm text-left text-zinc-500">
                Não possuí uma conta?
                <Router-link class="text-black" to="/register">Cadastre-se!</Router-link>
            </p>
        </label>
    </form>

</template>
<style scoped>
.btn-primary {
    @apply bg-primary text-white p-3 px-10 cursor-pointer duration-300 rounded-full hover:opacity-100;
}
</style>