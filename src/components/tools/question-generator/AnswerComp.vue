<template>
     <div class="flex items-center flex-row gap-4">
        <div class="gradient-border">
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

<style scoped>
    img {
        width: 20px;
        height: 20px;
    }
</style>