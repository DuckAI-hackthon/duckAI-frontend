<template>
    <div class="flex-col-center gap-10 xl:mt-20">
        <RespostaComp />
        <div class="flex-center gap-[7vw] gradient-border absolute bottom-8">
            <input class="input-chat pl-8" type="text" />
            <button class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary">
                <img src="@/assets/images/pointer.png" alt="" class="w-[2vh] h-[2vh]" />
            </button>
        </div>
    </div>
</template>

<script setup>
import RespostaComp from "./RespostaComp.vue";
</script>