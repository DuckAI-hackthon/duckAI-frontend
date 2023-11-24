<template>
    <div>
        <textarea cols="30" rows="10" v-model="textQuestion"></textarea>
        <button @click="getAnswer()">Enviar Pergunta</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { QEAFetchStore } from "@/stores/qea"
const qeaFetchStore = QEAFetchStore()
 
const textQuestion = ref('');

async function getAnswer() {
    await qeaFetchStore.getAnswer(textQuestion.value);
}

</script>

