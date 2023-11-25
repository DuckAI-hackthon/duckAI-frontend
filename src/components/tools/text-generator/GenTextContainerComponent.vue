<template>
    <div class="flex-col-center gap-10 xl:mt-20">
        <RespostaComp v-if="keyLoader == false" :choice="choice" />
        <div v-else>Carregando...</div>
        <div class="flex-center gap-[7vw] gradient-border absolute bottom-8">
            <input v-model="text" class="input-chat pl-8" type="text" placeholder="Digite seu texto aqui" />
            <button @click="postGeneratorText" class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary">
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