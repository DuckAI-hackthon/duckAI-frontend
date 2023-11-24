<template>
    <div>
        <textarea cols="30" rows="10" v-model="textToCatch"></textarea>
        <button @click="getKeyWords()">Pegar Palavras-Chave</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { keyWordFetchStore } from '@/stores/keys';
const newKeyWordFetchStore = keyWordFetchStore();

const textToCatch = ref('');

async function getKeyWords() {
    await newKeyWordFetchStore.getKeyWords(textToCatch.value);
}

</script>
