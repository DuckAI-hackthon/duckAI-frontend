<script setup>
import TitleSpecial from '@/components/TitleSpecial.vue'
import axios from 'axios';
import { onMounted, ref } from 'vue'
import CirclesComponent from '../components/login/CirclesComponent.vue'


const devsData = ref([])

const devsInfo = async() => {
    try{
        const result = await axios.get(
            "http://localhost:8000/api/media/images/"
        )
        console.log(result.data)
        devsData.value = result.data
    } catch(error){
        console.log(error)
    }
}
onMounted(() => {
  devsInfo();
})
</script>
<template>
    <div class="min-h-screen w-full flex flex-col gap-12 pb-12">
        <div class="mt-12 text-center text-white">
        <h1 class="text-3xl">Sobre nós</h1>
        <p class="text-xl">Uma breve apresentação sobre os desenvolvedores da DuckAI!</p>
        </div>
        <div class="w-3/4 mx-auto flex gap-6" v-for="(dev, index) in devsData"  :key="dev.name" 
        :class="index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'">
            <div class="w-4/12 h-1/2 ">
            <img :src="dev.url" class="w-full rounded-sm justify-self-end">
            </div>
            <div class="flex flex-col">
            <TitleSpecial :text="dev.nome" class="mt-12"/>
            <p class="text-white text-xl text-left">{{ dev.description }}</p>
            </div>
            <CirclesComponent/>

        </div>
    </div>
</template>

