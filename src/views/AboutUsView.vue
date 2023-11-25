<script>
import ButtonToHome from '../components/ButtonToHome.vue'

import TitleSpecial from '../components/TitleSpecial.vue'

export default {
    components: {
        TitleSpecial,
        ButtonToHome
    }
};

</script>

<template>

<ButtonToHome link="/dashboard" text="Inicio"/>
        <h1 class="text-4xl	mt-40 text-white text-center mb-40">Sobre nós</h1>
        <div class=" h-2 flex flex-row gap-5">
            <div class="w-[15vw] h-[15vw] bg-white rounded-xl"></div>
        <div class="flex flex-col gap-5">
            <TitleSpecial text="Nome"/>
            <p class="text-sm text-white">Função</p>
            
            <button class="bg-indigo-700 w-40 py-2 rounded-[50px] text-white">
                <router-link to="#">
                    Get Started
                </router-link>
            </button>
        </div>
        
        </div>
</template>