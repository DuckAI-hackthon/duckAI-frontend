<template>
     <div class="flex items-center flex-row gap-4">
        <div class="gradient-border h-[6.5vh]">
            AI
        </div>
        <p class="w-[35vw]">
            {{ props.answer }}
        </p>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    answer: String
})
</script>