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

const textTo = ref('')
const textFrom = ref('')

const getTranslation = async (textTo) => {
    try{
        const data = await axios.post(
            "http://localhost:3000/duck/qea",
            {
                prompt: textTo,
                from: "English",
                to: "Portuguese"
            },
        )
        console.log(data)
        textFrom.value = data
    } catch(error){
        console.error(error)
    }
}

</script>
