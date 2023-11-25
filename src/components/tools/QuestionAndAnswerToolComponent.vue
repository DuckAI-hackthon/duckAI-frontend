<script>
import ToolTitleComponent from './ToolTitleComponent.vue'
import GenAnswer from './GenAnswer.vue'

export default {
    components: {
        GenAnswer,
        ToolTitleComponent
    },
}


</script>

<template>
    <main>
        <ToolTitleComponent text="Perguntas e Respostas "/>
        <GenAnswer />
    </main>
        


</template>
