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
    <main class="pt-32 pb-32">
        <ToolTitle text="Geração de resumo "/>
        <GenTextContainerComponent/>
    </main>
        


</template>
