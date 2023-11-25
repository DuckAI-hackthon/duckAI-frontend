<template>
    <h1 class="text-purple text-2xl pb-5">
        {{ text }}
    </h1>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        }
    }
}
</script>