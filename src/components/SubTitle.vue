<template lang="">
    <div class="w-4/6">
        {{ text }}
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: 'SubTitle'
        }
    }
}
</script>
<style lang="">
    
</style>