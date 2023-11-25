<template>
  <div class="flex-col-center gap-10 xl:mt-20">
    <QuestionComp :message="question" />
    <hr class="text-zinc-600 h-0 w-8/12" />
    <AnswerComp :answer="answer" />
    <div
      class="flex-center gap-[7vw] gradient-border w-[60vw] absolute bottom-8"
    >
      <input v-model="message" class="input-chat" type="text" />
      <button @click="newQuestion()" class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary">
        <img src="@/assets/images/pointer.png" alt="" class="w-[2vh] h-[2vh]" />
      </button>
    </div>
  </div>
</template>

<script setup>
import getAnswerApi from '@/services/questionApi.js'

import QuestionComp from "./QuestionComp.vue";
import AnswerComp from "./AnswerComp.vue";
import { ref } from "vue";

const message = ref("a");
const question = ref("b");
const answer = ref("c");

function newQuestion() {
    const usuario = new getAnswerApi()
    const teste = usuario.getAnswer(message.value)
    console.log(teste)
    console.log(usuario)
}

</script>

<style>
div .gradient-border:nth-child(3) {
  @apply p-0;
}

.input-chat {
  @apply px-3 outline-none border-none focus:border-[#6843EC] text-base;
}
</style>
