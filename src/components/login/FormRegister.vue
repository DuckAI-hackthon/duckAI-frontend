<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../stores/user'

const userStore = useUserStore();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const ShowPassword = ref(false)
const msg = ref('')

async function registerUser(){
    if(name.value === '' || email.value === '' || password.value === '' || confirmPassword.value === ''){
        msg.value = "Preencha todos os campos."
        return;
    }else if(password.value != confirmPassword.value){
        msg.value ="As senhas devem ser iguais!"
    }else{
        await userStore.register(email.value, password.value, name.value)
        this.$push('/dashboard')
    }
}


</script>
<template>
    <div>
        <small class="text-xs text-red-500">
            {{ msg }}
        </small>
        <form class="flex-col-center gap-2 text-left" action="">
            <label>
                <p class="text-xs  mt-5">Nome</p>
                <input placeholder="Ex: John Dough" class="input-login my-1" type="text" v-model="name">
            </label>
            <label>
                <p class="text-sm">E-mail</p>
                <input placeholder="Ex: johndough@gmail.com" class="input-login my-1" type="email" v-model="email">
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
            </label>
            <p class="text-xs w-[22vw] mt-3">Ao continuar você concorda com nossos Termos de uso e Política de privacidade</p>
            <label class="flex-login gap-4 pt-4">
                <div class="btn-primary hover:bg-indigo-700" @click="registerUser">
                    Criar
                </div>   
                <p class="text-sm text-left text-zinc-500">
                    Já possui uma conta?
                    <Router-link class="text-black" to="/login">Faça Login</Router-link>
                </p>
            </label> 
        </form>
    </div>
</template>

<style scoped>
.btn-primary {
    @apply bg-primary text-white p-3 px-12 cursor-pointer duration-300 rounded-full hover:opacity-100;
}</style>