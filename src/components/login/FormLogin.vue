<script setup>
import { useUserStore } from '../../stores/user'
import { ref } from 'vue';

const userStore = useUserStore()

const email = ref('')
const password = ref('')

const ShowPassword = ref(false)

async function loginUser() {
    await userStore.login(email.value, password.value);
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
            <p class="text-xs">Use 8 caracteres ou mais.</p>
        </label>
        <label class="flex-login gap-4 pt-4">
            <div class="btn-primary hover:bg-indigo-700" @click="loginUser">
                Login
            </div>      
            <Router-link to="/register">
            <p class="text-sm text-left">Não possuí uma conta? <br> Cadastre-se!</p>
            </Router-link>
        </label>
    </form>

</template>
<style scoped>
.btn-primary {
    @apply bg-primary opacity-70 text-black p-3 px-5 cursor-pointer duration-300 rounded-full hover:opacity-100;
}
</style>