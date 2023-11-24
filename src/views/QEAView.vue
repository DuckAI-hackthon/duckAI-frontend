<template>
    <div>
        <textarea cols="30" rows="10" v-model="textQuestion"></textarea>
        <button @click="getAnswer(textQuestion)">Enviar Pergunta</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const textQuestion = ref('');

</script>
