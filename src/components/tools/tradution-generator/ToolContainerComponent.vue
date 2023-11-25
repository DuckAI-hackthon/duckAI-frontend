<script setup>
import PdfSvgComponent from '@/components/icons/PdfSvgComponent.vue'
import ArrowsSvgComponent from '@/components/icons/ArrowsSvgComponent.vue'

import { ref } from 'vue'

import { useOtherStore } from "@/stores/others";
import { useUserStore } from "@/stores/user";

const otherStore = useOtherStore();
const userStore = useUserStore();

const texto = ref("a");
const resposta = ref("");

async function postTranslate() {
  const data = await otherStore.postTranslate(texto.value, 'pt', 'en', userStore.userData.id, 1);
    resposta.value = data.response.response;
}

</script>

<template>
    <section class="flex flex-row justify-between mt-[10vh] pb-[19vh]">
        <div class="flex-col-center">
            <div class="flex gap-3 flex-row">
                <select class="font-light gradient-border text-white w-[20vw]" name="" id="">
                    <option value="">Português</option>
                    <option value="">Inglês</option>
                    <option value="">Alemão</option>
                </select>
                <div class=" gradient-borderflex justify-center gradient-border">
                    <PdfSvgComponent />
                </div>
            </div>
            <textarea class="gradient-border text-white  mt-10 w-[24vw] h-[30vh]" name="" id=""
                placeholder="Digitar texto" v-model="texto"></textarea>
        </div>
        <div>
            <ArrowsSvgComponent />
        </div>

        <div class="flex-col-center">
            <div class="flex gap-3 flex-row">
                <select class="font-light gradient-border text-white w-[24vw]" name="" id="">
                    <option value="">Português</option>
                    <option value="">Inglês</option>
                    <option value="">Alemão</option>
                </select>
            </div>
            <textarea class="gradient-border text-white  mt-10 w-[24vw] h-[30vh]" name="" id=""
                placeholder="Digitar texto" v-model="resposta"></textarea>
        </div>
    </section>
    <button class="bg-red-500 w-16 p-5" @click="postTranslate">
        traduzir
      </button>
</template>