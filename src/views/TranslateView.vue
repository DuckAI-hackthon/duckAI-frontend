<template>
    <div>
        <textarea cols="30" rows="10" v-model="textToTranslate"></textarea>
        <button @click="getTranslation(textTo, to, from)">Traduzir</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { translateFetchStore } from '@/stores/translate';
const newTranslateFetchStore = translateFetchStore();

const textToTranslate = ref('');
const textTo = ref('Portuguese');
const textFrom = ref('English');

async function getTranslation() {
    await newTranslateFetchStore.getTranslation(textToTranslate.value, textFrom.value, textTo.value)
}

</script>
