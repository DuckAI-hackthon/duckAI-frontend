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
    <main class="pt-32 pb-32">
        <ToolTitle text="Tradução de texto"/>
        <ToolContainerComponent/>
    </main>
        


</template>