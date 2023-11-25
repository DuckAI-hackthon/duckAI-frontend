<template>
    <div class="flex flex-row gap-4 items-center">
        <div class="gradient-border h-[6.5vh]">
            IA
        </div>
        <p class="w-[35vw]">
            {{ response }}
        </p>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
    choice: {
        type: String,
        required: true
    }
})
const response = computed(() => props.choice)

</script>