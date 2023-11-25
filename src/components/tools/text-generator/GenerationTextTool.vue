<script>
import ToolTitle from '../ToolTitle.vue'
import GenTextContainerComponent from './GenTextContainerComponent.vue'

export default {
    components: {
        GenTextContainerComponent,
        ToolTitle
    },
}


</script>

<template>
    <main>
        <ToolTitle text="Geração de resumo "/>
        <GenTextContainerComponent/>
    </main>
        


</template>
