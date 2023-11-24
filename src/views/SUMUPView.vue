<template>
    <div>
        <button @click="getSummary()">Resumir</button>
        <textarea cols="30" rows="10" v-model="textToSUMUP"></textarea>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { summaryFetchStore } from '@/stores/sumup';
const newSummaryFetchStore = summaryFetchStore()

const textToSUMUP = ref('');

async function getSummary() {
    await newSummaryFetchStore.getSummary(textToSUMUP.value);
}
</script>
