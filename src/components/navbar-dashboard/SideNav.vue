<script>
export default {
    data(){
        return {
            ias: [
                {
                    img: 'img',
                    nome: 'ia1'
                },
                {
                    img: 'img',
                    nome: 'ia2'
                },
                {
                    img: 'img',
                    nome: 'ia3'
                },
                
            ],
            openMenu: false,
        }
    }
}
</script>

<template>
    <div :class="['fixed p-4 left-0 top-0 bottom-0 flex flex-col justify-between items-start overflow-hidden w-12 flex-nowrap shrink-0',{openMenu}]">
        <button v-if="openMenu == false" @click="openMenu =! openMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                <path d="M25 18H5M25 12H5M25 6H5" stroke="#AEB1B5" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </button>
        <button v-else @click="openMenu =! openMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                <path d="M13.7253 5.80336V4.87036C13.7253 2.83536 12.0753 1.18536 10.0403 1.18536H5.16526C3.13126 1.18536 1.48126 2.83536 1.48126 4.87036V16.0004C1.48126 18.0354 3.13126 19.6854 5.16526 19.6854H10.0503C12.0793 19.6854 13.7253 18.0404 13.7253 16.0114V15.0684M20.5188 10.4353H8.47776M20.5188 10.4353L17.5905 7.52016M20.5188 10.4353L17.5905 13.3512" stroke="#AEB1B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <section>
            <ul class="flex flex-col gap-2 w-72">
                <li class="hover:border-r-2 cursor-pointer border-primary pr-3" v-for="ia in ias" :key="ia.nome">
                    <span class="pr-2"> {{ ia.img  }} </span> <span> {{ ia.nome  }} </span>
                </li>
            </ul>
        </section>
        <section>
            <ul class="flex flex-col gap-6 w-72">
                <li class="cursor-pointer flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6347 6.12361L18.0122 5.04352C17.4857 4.1296 16.3187 3.81432 15.4035 4.33872C14.9679 4.59534 14.4481 4.66815 13.9587 4.54109C13.4693 4.41402 13.0506 4.09752 12.7948 3.66137C12.6303 3.38415 12.5419 3.06839 12.5386 2.74604C12.5534 2.22922 12.3584 1.7284 11.998 1.35767C11.6376 0.986937 11.1425 0.777863 10.6255 0.778076H9.3715C8.86497 0.77807 8.37932 0.979914 8.022 1.33895C7.66469 1.69798 7.46518 2.18459 7.46761 2.69112C7.4526 3.73693 6.60048 4.57681 5.55457 4.5767C5.23221 4.57336 4.91646 4.48494 4.63924 4.32041C3.72406 3.79601 2.55712 4.11129 2.03054 5.02522L1.36235 6.12361C0.836413 7.03639 1.1474 8.20261 2.058 8.73231C2.64991 9.07404 3.01453 9.70559 3.01453 10.3891C3.01453 11.0725 2.64991 11.7041 2.058 12.0458C1.14856 12.5719 0.83723 13.7353 1.36235 14.6454L1.99393 15.7346C2.24065 16.1798 2.65461 16.5083 3.1442 16.6474C3.63379 16.7866 4.15864 16.7249 4.60262 16.476C5.03908 16.2213 5.55919 16.1516 6.04734 16.2822C6.53549 16.4128 6.95124 16.733 7.20217 17.1717C7.3667 17.4489 7.45511 17.7646 7.45846 18.087C7.45846 19.1435 8.31496 20 9.3715 20H10.6255C11.6785 20.0001 12.5335 19.1491 12.5386 18.0962C12.5361 17.588 12.7369 17.1 13.0962 16.7407C13.4555 16.3814 13.9435 16.1807 14.4516 16.1831C14.7732 16.1917 15.0876 16.2798 15.3669 16.4394C16.2797 16.9653 17.4459 16.6544 17.9756 15.7438L18.6347 14.6454C18.8898 14.2075 18.9598 13.686 18.8292 13.1964C18.6986 12.7067 18.3783 12.2894 17.939 12.0367C17.4998 11.784 17.1794 11.3666 17.0488 10.8769C16.9182 10.3873 16.9883 9.86582 17.2434 9.42796C17.4092 9.13834 17.6494 8.8982 17.939 8.73231C18.8441 8.20289 19.1544 7.04349 18.6347 6.13277V6.12361Z" stroke="#AEB1B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.6392 10.3891C12.6392 11.845 11.459 13.0252 10.0031 13.0252C8.54717 13.0252 7.36693 11.845 7.36693 10.3891C7.36693 8.93315 8.54717 7.7529 10.0031 7.7529C11.459 7.7529 12.6392 8.93315 12.6392 10.3891Z" stroke="#AEB1B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span> Configurações </span>
                </li>
                <li class="cursor-pointer flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                        <path d="M13.7253 5.80336V4.87036C13.7253 2.83536 12.0753 1.18536 10.0403 1.18536H5.16526C3.13126 1.18536 1.48126 2.83536 1.48126 4.87036V16.0004C1.48126 18.0354 3.13126 19.6854 5.16526 19.6854H10.0503C12.0793 19.6854 13.7253 18.0404 13.7253 16.0114V15.0684M20.5188 10.4353H8.47776M20.5188 10.4353L17.5905 7.52016M20.5188 10.4353L17.5905 13.3512" stroke="#AEB1B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span> Sair </span>
                </li>
            </ul>
        </section>
    </div>
</template>


<style scoped>

.openMenu {
    @apply w-64 shadow-lg bg-slate-700 z-10 transition-all;
}

</style>