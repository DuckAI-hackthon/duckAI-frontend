<template lang="">
    <div class="btn-primary hover:bg-indigo-700">
        <router-link :to="link">
            {{ text }}
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: 'ButtonPrimary'
        },
        link: {
            type: String,
            default: '/'
        }
    },
    methods: {
        click() {
            this.$emit('clickButtonPrimary')
        }
    }
}
</script>
<style>
.btn-primary {
    @apply bg-primary opacity-70 text-black p-3 px-5 cursor-pointer duration-300 rounded-full hover:opacity-100;
}
</style>