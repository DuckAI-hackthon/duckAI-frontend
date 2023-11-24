<template>
    <div>
        <textarea cols="30" rows="10" v-model="textTo"></textarea>
        <textarea cols="30" rows="10" v-model="textFrom"></textarea>
        <button @click="getTranslation(textTo, to, from)">Traduzir</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const textTo = ref('');
const textFrom = ref('');


</script>
