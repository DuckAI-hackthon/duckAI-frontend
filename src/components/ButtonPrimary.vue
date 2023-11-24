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
    @apply bg-primary text-white p-4 px-8 cursor-pointer rounded-full;
}
</style>