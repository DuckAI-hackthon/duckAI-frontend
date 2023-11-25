<script setup>
import { ref } from 'vue';
import { userOperationsStore } from '@/stores/user';
const newUserOperationsStore = userOperationsStore();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const ShowPassword = ref(false)

async function registerUser(){
    if(password.value === confirmPassword.value){
        await newUserOperationsStore.registerUser(email.value, password.value, name.value)
        if (userOperationsStore.registerUser === 201){
            console.log("Usuario cadastrado")
        }
    }else{
        alert("As senhas nao coincidem(placeholder).")
    }
}


</script>
<template>
    <form class="flex-col-center gap-2" action="">
        <label>
            <p class="text-xs  mt-5">Nome</p>
            <input class="input-login my-1" type="text" v-model="name">
        </label>

        <label>
            <p class="text-sm">E-mail</p>
            <input class="input-login my-1" type="email" v-model="email">
        </label>

        <label>
            <div class="flex flex-row just items-center justify-between	">
                <p class="text-sm">Senha</p>
                <p class="text-xs cursor-pointer"  @click="ShowPassword = !ShowPassword">Mostrar</p>
            </div>
            <input class="input-login my-1" :type="ShowPassword ? 'text' : 'password'" v-model="password">
            <p class="text-xs">Use 8 caracteres ou mais.</p>
        </label>

        <label>
            <div class="flex flex-row items-center justify-between	">
                <p class="text-sm">Confirmação de senha</p>
                <p class="text-xs cursor-pointer" @click="ShowPassword = !ShowPassword">Mostrar</p>
            </div>
            <input class="input-login my-1" :type="ShowPassword ? 'text' : 'password'" v-model="confirmPassword">
            <p class="text-xs">Use 8 caracteres ou mais.</p>
        </label>

        <p class="text-xs w-[22vw] mt-3">Ao continuar você concorda com nossos Termos de uso e Política de privacidade</p>
        <label class="flex-login gap-4">
                <div class="btn-primary hover:bg-indigo-700" @click="registerUser()">
                    Cadastrar
                </div>    
                <Router-link to="/login">  
                <p class="text-sm">Já possuí conta? Faça Login </p>
                </Router-link>

        </label>    
    </form>
</template>

<style scoped>
.btn-primary {
    @apply bg-primary opacity-70 text-black p-3 px-5 cursor-pointer duration-300 rounded-full hover:opacity-100;
}</style>