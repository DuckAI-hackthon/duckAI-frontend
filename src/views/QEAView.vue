<template>
    <div>
        <textarea cols="30" rows="10" v-model="textQuestion"></textarea>
        <button @click="getAnswer(textQuestion)">Enviar Pergunta</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
const textQuestion = ref('')
const textAnswer = ref('')

const getAnswer = async (textQuestion) => {
    try{
        const data = await axios.post(
            "http://localhost:3000/duck/qea",
            {
                prompt: textQuestion,
            },
        )
        textAnswer.value = data
    } catch(error){
        console.error(error)
    }
}
</script>
