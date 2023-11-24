<template>
    <div>
        <textarea cols="30" rows="10" v-model="textToCatch"></textarea>
        <button @click="catchKeyWords(textToCatch)">Pegar Palavras-Chave</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const textToCatch = ref('');


</script>
