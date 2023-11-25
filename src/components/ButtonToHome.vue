<template lang="">
    <button class="btn-get-started hover:bg-indigo-700 transition-all">
        <router-link :to="link">
            {{ text}}
        </router-link>
    </button>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Inicio'
        },
        link: {
            type: String,
            default: '/dashboard'
        }
    }
}
</script>
<style scoped>
    .btn-get-started {
        @apply text-white absolute right-10 top-10 p-4 px-10 cursor-pointer rounded-full;
        border-radius: 50px;
        border: 1px solid #6440E4;
    }
</style>