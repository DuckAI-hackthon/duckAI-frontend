<template>
    <div class="flex flex-row gap-4 ">
        <div class="gradient-border h-[6.5vh]">
            <img src="@/assets/images/user.png" alt="" class=" w-[3vh] h-[3vh]" />
        </div>
        <p class="w-[35vw]">
            {{ props.message  }}
        </p>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    message: String
})
</script>