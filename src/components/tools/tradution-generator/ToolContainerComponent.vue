<script setup>
import PdfSvgComponent from '@/components/icons/PdfSvgComponent.vue'
import ArrowsSvgComponent from '@/components/icons/ArrowsSvgComponent.vue'

import { ref } from 'vue'

import { useOtherStore } from "@/stores/others";
import { useUserStore } from "@/stores/user";
import { dashboardStore } from '@/stores/dashboard';
import ButtonPrimary from '@/components/ButtonPrimary.vue';

const otherStore = useOtherStore();
const userStore = useUserStore();
const dashStore = dashboardStore();


const text = ref("a");
const choice = ref("");
const from_lang = ref("pt");
const to_lang = ref("en");

async function postTranslate() {
    const data = await otherStore.postTranslate(text.value, from_lang.value, to_lang.value, userStore.userData.id, dashStore.selectAI);
    console.log(data.response)
    choice.value = JSON.stringify(data.response);
}
</script>

<template>
    <section class="flex flex-row justify-between mt-[10vh] pb-[19vh]">
        <div class="flex-col-center">
            <div class="flex gap-3 flex-row">
                <select class="font-light gradient-border text-white w-[20vw]" name="" id="" v-model="from_lang">
                    <option value="pt">Português</option>
                    <option value="en">Inglês</option>
                    <option value="de">Alemão</option>
                </select>
                <div class=" gradient-borderflex justify-center gradient-border">
                    <PdfSvgComponent />
                </div>
            </div>
            <textarea class="gradient-border text-white  mt-10 w-[24vw] h-[30vh]" name="" id=""
                placeholder="Digitar texto" v-model="text"></textarea>
        </div>
        <div class="flex flex-col gap-16 justify-center items-center">
            <ArrowsSvgComponent />
            <ButtonPrimary text="Traduzir" link="/dashboard" @click="postTranslate" />
        </div>

        <div class="flex-col-center">
            <div class="flex gap-3 flex-row">
                <select class="font-light gradient-border text-white w-[24vw]" name="" id="" v-model="to_lang">
                    <option value="pt">Português</option>
                    <option value="en">Inglês</option>
                    <option value="de">Alemão</option>
                </select>
            </div>
            <textarea class="gradient-border text-white  mt-10 w-[24vw] h-[30vh]" name="" id=""
                placeholder="Digitar texto" v-model="choice"></textarea>
        </div>
    </section>
</template>