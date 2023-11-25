<script>
import ToolTitleComponent from './ToolTitleComponent.vue'
import GenTextContainerComponent from './GenTextContainerComponent.vue'

export default {
    components: {
        GenTextContainerComponent,
        ToolTitleComponent
    },
}


</script>

<template>
    <main>
        <ToolTitleComponent text="Geração de resumo "/>
        <GenTextContainerComponent/>
    </main>
        


</template>