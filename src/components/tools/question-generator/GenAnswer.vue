<template>
  <div class="flex-col-center gap-10 xl:mt-20">
    <AnswerComp :answer="answer" />
    <hr class="text-zinc-600 h-0 w-8/12" />
    <QuestionComp :message="question" />
    <hr class="text-zinc-600 h-0 w-8/s12" />
    <AnswerComp :answer="answer" />
    <hr class="text-zinc-600 h-0 w-8/12" />
    <QuestionComp :message="question" />
    <hr class="text-zinc-600 h-0 w-8/s12" />
    <div class="flex-center gap-[7vw] gradient-border w-[60vw] fixed bottom-8">
      <input v-model="message" class="input-chat" type="text" />
      <button @click="newQuestion()" class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary">
        <img src="@/assets/images/pointer.png" alt="" class="w-[2vh] h-[2vh]" />
      </button>

      
    </div>
  </div>
</template>

<script setup>
import { useOtherStore } from "@/stores/others";
import { useUserStore } from "@/stores/user";

const otherStore = useOtherStore();
const userStore = useUserStore();

import QuestionComp from "./QuestionComp.vue";
import AnswerComp from "./AnswerComp.vue";
import { ref } from "vue";

const message = ref("");
const question = ref("");
const answer = ref("Olá, estou aqui para te ajudar!");

async function newQuestion() {
  console.log(message.value, question.value, answer.value)
  await otherStore.postTranslate(message.value, 'pt', 'en', userStore.userData.id, 1);
}

</script>

<style>

</style>
