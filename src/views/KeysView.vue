<template>
    <div>
        <textarea cols="30" rows="10" v-model="textToCatch"></textarea>
        <button @click="catchKeyWords(textToCatch)">Pegar Palavras-Chave</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const textToCatch = ref('');
const keyWords = ref('')

const catchKeyWords = async (text) => {
    try{
        const data = await axios.post(
            "http://localhost:3000/duck/keys",
            {
                prompt: text,
            },
        )
        keyWords.value = data
        console.log(data)
    } catch(error){
        console.error(error)
    }
};
</script>
