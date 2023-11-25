<template>
    <div class="flex-col-center gap-10 mt-20 pb-40">
        <RespostaComp class="w-7/12" v-if="keyLoader == false" :choice="choice" />
        <div v-else>Carregando...</div>
        <div class="w-7/12 flex gap-4 items-center justify-start relative">
            <small class="absolute -top-7 text-zinc-600">Selecione o tamanho do texto: </small>
            <article v-for="item in ['Pequeno', 'Médio', 'Grande']" :key="item" class="gradient-border text-white hover:text-primary cursor-pointer transition-all">
                {{item}}
            </article>
        </div>
        <div class="flex-center gap-[7vw] gradient-border w-[60vw] fixed bottom-8">
            <input v-model="message" class="input-chat" placeholder="Digite seu texto aqui" type="text" />
            <button @click="postGeneratorText()" class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary">
                <img src="@/assets/images/pointer.png" alt="" class="w-[2vh] h-[2vh]" />
            </button>
        </div>
    </div>
</template>

<script setup>
import RespostaComp from "./RespostaComp.vue";
import { ref } from 'vue'

import { useOtherStore } from "@/stores/others";
import { useUserStore } from "@/stores/user";

const otherStore = useOtherStore();
const userStore = useUserStore();
const keyLoader = ref(false)
const text = ref("");
const choice = ref("Olá, estou aqui para te ajudar!");

async function postGeneratorText() {
    keyLoader.value = !keyLoader.value

    const data = await otherStore.postGeneratorText(text.value, userStore.userData.id, 1);
    choice.value = data.response.response;

    new Promise((resolve) => {
        setTimeout(() => {
            resolve()
            keyLoader.value = !keyLoader.value
        }, 1000)
    });
}
</script>