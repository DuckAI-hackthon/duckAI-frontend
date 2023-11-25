<script setup>
import ToolTitle from "../ToolTitle.vue";

import { ref } from 'vue'

import { useOtherStore } from "@/stores/others";
import { useUserStore } from "@/stores/user";

const otherStore = useOtherStore();
const userStore = useUserStore();

const text = ref("");
const choice = ref("");

async function GeneratorKey() {
  console.log(text.value)
  const data = await otherStore.postKeyGenerator(text.value, 11, userStore.userData.id, 1);

  choice.value = data.response.response;
}
</script>
<template>
  <section class="pt-32 pb-32">
  <article>
    <ToolTitle text="Geração de palavras-chave " />
    <div class="flex-center gap-10">
      <div class="gradient-border w-4/6 h-[36vh]">
        Texto
        <p class="w-full p-2">
          {{ text }}
        </p>
      </div>
      <div class="gradient-border h-[36vh] flex flex-col justify-start gap-4 items-center">
        Palavras Chave
        <ul class="text-sm justify-start items-center text-white px-4 flex flex-col gap-4 p-2">
          <li>
            {{ choice }}
          </li>
        </ul>
      </div>
    </div>
  </article>
  <div class="flex-center gap-[7vw] gradient-border absolute bottom-8">
    <input v-model="text" class="input-chat pl-8" type="text" placeholder="Digite seu texto aqui" />
    <button @click="GeneratorKey" class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary">
        <img src="@/assets/images/pointer.png" alt="" class="w-[2vh] h-[2vh]" />
      </button>
    </div>
  </section>
</template>
<style>
.input-number {
    @apply py-3 px-4 rounded-[10px] ;
    border: 1px solid #6843EC;
    background: #19161C;
    box-shadow: 0px 58px 80px 0px rgba(0, 0, 0, 0.16);
    resize: none;

}
</style>
