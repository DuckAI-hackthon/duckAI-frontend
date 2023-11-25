<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Title'
        },
    },
}
</script>
<template>
    <h1 class="text-6xl	text-center text-gradient	">{{ text }}</h1>
</template>

<style>
</style>