<script>
import ToolTitleComponent from '@/components/tools/ToolTitleComponent.vue'
import ToolContainerComponent from '@/components/tools/ToolContainerComponent.vue'

export default {
    components: {
        ToolContainerComponent,
        ToolTitleComponent
    },
}


</script>

<template>
    <main>
        <ToolTitleComponent text="Tradução de texto"/>
        <ToolContainerComponent/>
    </main>
        


</template>