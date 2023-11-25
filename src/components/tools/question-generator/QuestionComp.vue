<template>
    <div class="flex items-center flex-row gap-4 ">
        <div class="gradient-border">
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

<style scoped>
    img {
        width: 20px;
        height: 20px;
    }
</style>