<template>
    <div>
        <button @click="getSummary(textToSUMUP)">Resumir</button>
        <textarea cols="30" rows="10" v-model="textToSUMUP"></textarea>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const textToSUMUP = ref('');

</script>
