<template>
  <div class="flex-col-center gap-10 xl:mt-20">
    <div v-for="chat in chatHistory" :key="chat.id" class="chat">
      <QuestionComp :message="chat.question" />
      <hr class="text-zinc-600 h-0 w-8/s12" />
      <AnswerComp :answer="chat.choice"/>
    </div>

    <div class="flex-center gap-[7vw] gradient-border w-[60vw] fixed bottom-8">
      <input v-model="question" class="input-chat" type="text" />
      <button @click="newQuestion()" class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary">
        <img src="@/assets/images/pointer.png" alt="" class="w-[2vh] h-[2vh]" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useOtherStore } from "@/stores/others";
import { useUserStore } from "@/stores/user";
import { dashboardStore } from "@/stores/dashboard";

const otherStore = useOtherStore();
const userStore = useUserStore();
const dashStore = dashboardStore();

import QuestionComp from "./QuestionComp.vue";
import AnswerComp from "./AnswerComp.vue";
import { ref, computed, onMounted } from "vue";

const question = ref("");
// const answer = ref("Olá, estou aqui para te ajudar!");

async function newQuestion() {
  const data = await otherStore.postChatQEA(question.value, userStore.userData.id, dashStore.selectAI);
  console.log(data)
}

const chatHistory = computed(() => {
  return otherStore.chatHistory;
});

onMounted(()=> {
  otherStore.getChatHistory(userStore.userData.id, 1)
})

</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
