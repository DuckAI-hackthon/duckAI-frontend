<template lang="">
    <div class="titleMaster">
        {{ text}}
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: 'TitleSpecial'
        }
    }
}
</script>
<style lang="">
    
</style>