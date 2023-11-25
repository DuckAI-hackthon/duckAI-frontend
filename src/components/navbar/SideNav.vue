<script setup>
import { useOtherStore } from '@/stores/others';
import { computed, onMounted, ref } from 'vue';

const openMenu = ref(false);
const otherStore = useOtherStore();

const ais = computed(() => otherStore.ais);


onMounted(()=> {
    console.log(ais.value)
})
</script>

<template>
    <div :class="['fixed py-4 left-0 top-0 bottom-0 flex flex-col justify-between items-start overflow-hidden w-12 flex-nowrap shrink-0',{openMenu}]">
        <button class="pl-4" v-if="openMenu == false" @click="openMenu =! openMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                <path d="M25 18H5M25 12H5M25 6H5" stroke="#AEB1B5" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </button>
        <button class="pl-4 animation" v-else @click="openMenu =! openMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 184 184" fill="none">
                <g clip-path="url(#clip0_164_397)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M92 102.841L135.37 146.211C136.816 147.608 138.753 148.381 140.763 148.363C142.773 148.346 144.696 147.539 146.118 146.118C147.539 144.696 148.345 142.773 148.363 140.763C148.38 138.753 147.608 136.816 146.211 135.371L102.841 92.0002L146.211 48.6299C147.608 47.1839 148.38 45.2473 148.363 43.2371C148.345 41.227 147.539 39.3041 146.118 37.8826C144.696 36.4611 142.773 35.6548 140.763 35.6374C138.753 35.6199 136.816 36.3927 135.37 37.7892L92 81.1595L48.6297 37.7892C47.1772 36.4272 45.2519 35.6837 43.261 35.716C41.2701 35.7483 39.3698 36.554 37.9624 37.9624C36.5549 39.3709 35.7506 41.2717 35.7197 43.2626C35.6888 45.2535 36.4336 47.1784 37.7967 48.6299L81.1594 92.0002L37.789 135.371C37.0568 136.078 36.4727 136.924 36.0709 137.859C35.6691 138.794 35.4576 139.801 35.4488 140.818C35.4399 141.836 35.6339 142.846 36.0194 143.788C36.4049 144.73 36.9742 145.586 37.694 146.306C38.4138 147.026 39.2698 147.595 40.212 147.981C41.1543 148.366 42.1638 148.56 43.1818 148.551C44.1997 148.543 45.2058 148.331 46.1411 147.929C47.0765 147.528 47.9225 146.943 48.6297 146.211L92 102.841Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_164_397">
                    <rect width="184" height="184" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </button>
        <section>
            <ul class="flex flex-col w-72">
                <li class="hover:border-l-2 pl-4 py-4 cursor-pointer border-primary" v-for="ai in ais" :key="ai.id">
                    <span class="pr-2"><img :src="ai.image.file" class="w-4" alt=""> </span> <span> {{ ai.name  }} </span>
                </li>
            </ul>
        </section>
        <ul class="flex flex-col gap-6 w-72">
            <li class="hover:border-l-2 pl-4 cursor-pointer border-primary flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6347 6.12361L18.0122 5.04352C17.4857 4.1296 16.3187 3.81432 15.4035 4.33872C14.9679 4.59534 14.4481 4.66815 13.9587 4.54109C13.4693 4.41402 13.0506 4.09752 12.7948 3.66137C12.6303 3.38415 12.5419 3.06839 12.5386 2.74604C12.5534 2.22922 12.3584 1.7284 11.998 1.35767C11.6376 0.986937 11.1425 0.777863 10.6255 0.778076H9.3715C8.86497 0.77807 8.37932 0.979914 8.022 1.33895C7.66469 1.69798 7.46518 2.18459 7.46761 2.69112C7.4526 3.73693 6.60048 4.57681 5.55457 4.5767C5.23221 4.57336 4.91646 4.48494 4.63924 4.32041C3.72406 3.79601 2.55712 4.11129 2.03054 5.02522L1.36235 6.12361C0.836413 7.03639 1.1474 8.20261 2.058 8.73231C2.64991 9.07404 3.01453 9.70559 3.01453 10.3891C3.01453 11.0725 2.64991 11.7041 2.058 12.0458C1.14856 12.5719 0.83723 13.7353 1.36235 14.6454L1.99393 15.7346C2.24065 16.1798 2.65461 16.5083 3.1442 16.6474C3.63379 16.7866 4.15864 16.7249 4.60262 16.476C5.03908 16.2213 5.55919 16.1516 6.04734 16.2822C6.53549 16.4128 6.95124 16.733 7.20217 17.1717C7.3667 17.4489 7.45511 17.7646 7.45846 18.087C7.45846 19.1435 8.31496 20 9.3715 20H10.6255C11.6785 20.0001 12.5335 19.1491 12.5386 18.0962C12.5361 17.588 12.7369 17.1 13.0962 16.7407C13.4555 16.3814 13.9435 16.1807 14.4516 16.1831C14.7732 16.1917 15.0876 16.2798 15.3669 16.4394C16.2797 16.9653 17.4459 16.6544 17.9756 15.7438L18.6347 14.6454C18.8898 14.2075 18.9598 13.686 18.8292 13.1964C18.6986 12.7067 18.3783 12.2894 17.939 12.0367C17.4998 11.784 17.1794 11.3666 17.0488 10.8769C16.9182 10.3873 16.9883 9.86582 17.2434 9.42796C17.4092 9.13834 17.6494 8.8982 17.939 8.73231C18.8441 8.20289 19.1544 7.04349 18.6347 6.13277V6.12361Z" stroke="#AEB1B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.6392 10.3891C12.6392 11.845 11.459 13.0252 10.0031 13.0252C8.54717 13.0252 7.36693 11.845 7.36693 10.3891C7.36693 8.93315 8.54717 7.7529 10.0031 7.7529C11.459 7.7529 12.6392 8.93315 12.6392 10.3891Z" stroke="#AEB1B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span> Configurações </span>
            </li>
            <li class="hover:border-l-2 pl-4 cursor-pointer border-primary flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                    <path d="M13.7253 5.80336V4.87036C13.7253 2.83536 12.0753 1.18536 10.0403 1.18536H5.16526C3.13126 1.18536 1.48126 2.83536 1.48126 4.87036V16.0004C1.48126 18.0354 3.13126 19.6854 5.16526 19.6854H10.0503C12.0793 19.6854 13.7253 18.0404 13.7253 16.0114V15.0684M20.5188 10.4353H8.47776M20.5188 10.4353L17.5905 7.52016M20.5188 10.4353L17.5905 13.3512" stroke="#AEB1B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span> Sair </span>
            </li>
        </ul>
    </div>
</template>


<style scoped>

.openMenu {
    @apply w-64 shadow-lg bg-slate-700 z-10 transition-all;
}

.animation {
    @apply transition-all duration-500;
}

</style>