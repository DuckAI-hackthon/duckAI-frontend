<template>
    <div>
        <textarea cols="30" rows="10" v-model="textTo"></textarea>
        <textarea cols="30" rows="10" v-model="textFrom"></textarea>
        <button @click="getTranslation(textTo, to, from)">Traduzir</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const textTo = ref('');
const textFrom = ref('');
const textTranslated = ref('');

const getTranslation = async (text) => {
    try{
        const data = await axios.post(
            "http://localhost:3000/duck/translate",
            {
                prompt: text,
                from: "English",
                to: "Portuguese"
            },
        );
        textTranslated.value = data;
    } catch(error){
        console.error(error);
    }
};

</script>
