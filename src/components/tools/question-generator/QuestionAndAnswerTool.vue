<script>
import ToolTitle from '../ToolTitle.vue'
import GenAnswer from './GenAnswer.vue'

export default {
    components: {
        GenAnswer,
        ToolTitle
    },
}


</script>

<template>
    <main>
        <ToolTitle text="Perguntas e Respostas "/>
        <GenAnswer />
    </main>
        


</template>
