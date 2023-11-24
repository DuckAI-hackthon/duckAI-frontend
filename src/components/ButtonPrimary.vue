<template lang="">
    <div class="btn-primary">
        {{ text }}
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: 'ButtonPrimary'
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