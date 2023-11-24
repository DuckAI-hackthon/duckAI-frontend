<template>
    <div>
        <button @click="getSummary(textToSUMUP)">Resumir</button>
        <textarea cols="30" rows="10" v-model="textToSUMUP"></textarea>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const textToSUMUP = ref('');

const getSummary = async (text) => {
    try{
        const data = await axios.post(
            "http://localhost:3000/duck/sumup",
            {
                prompt: text,
            },
        )
        console.log(data)
    } catch(error){
        console.error(error)
    }
};
</script>
