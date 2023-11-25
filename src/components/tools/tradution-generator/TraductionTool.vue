<script>
import ToolTitle from '../ToolTitle.vue'
import ToolContainerComponent from './ToolContainerComponent.vue'

export default {
    components: {
        ToolContainerComponent,
        ToolTitle
    },
}


</script>

<template>
    <main>
        <ToolTitle text="Tradução de texto"/>
        <ToolContainerComponent/>
    </main>
        


</template>