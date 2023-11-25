<template lang="">
    <router-link :to="link">
    <button class="btn-get-started hover:bg-indigo-700 transition-all">
            {{ text}}
        </button>
    </router-link>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: 'ButtonGetStarted'
        },
        link: {
            type: String,
            default: '/register'
        }
    }
}
</script>
<style scoped>
    .btn-get-started {
        @apply w-72 text-white p-4 px-8 cursor-pointer rounded-full;
        border-radius: 15px;
        border: 1px solid #6440E4;
    }
</style>

<!-- 47 9992095717 - vinicius -->

<!-- 

6

8

12 

-->