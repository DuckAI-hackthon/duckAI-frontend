<template>
    <div>
        <button @click="openDropdown = !openDropdown" class="flex gap-2 items-center">
            <img
                    src="@/assets/images/user.png"
                    alt=""
                    class="w-6 h-6"
                />
                <p>{{ userData.username }}</p>
                <svg class="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                >
                    <path
                    d="M15 1.5L8 8.5L1 1.5"
                    stroke="#8B8D90"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                </svg>
        </button>
        <div :class="{openDropdown}" class="hidden absolute top-16  bg-slate-800">
            <ul class="flex flex-col items-start">
                <li class="transition-all hover:bg-slate-600 px-4 py-2 w-full text-left">
                    Meu Perfil
                </li>
                <li class="transition-all hover:bg-slate-600 px-4 py-2 w-full text-left">
                    Sair
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { useUserStore } from '../../stores/user'
import { ref, computed } from 'vue';

const userStore = useUserStore()

const userData = computed(() => userStore.userData)

const openDropdown = ref(false)
</script>
<style scoped>
    .openDropdown {
        display: block !important;

    }
</style>