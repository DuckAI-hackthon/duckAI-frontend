<template>
    <div class="flex justify-center items-center gap-4">
        <InfoTools
            title="Tradução de texto"
            description="With AI-powered image generation, designers and creatives can streamline their workflows and unlock new levels of efficiency."
            img="traducao-de-texto.png"
        />
        <InfoTools
            title="Geração de resumo"
            description="With AI-powered image generation, designers and creatives can streamline their workflows and unlock new levels of efficiency."
            img="geracao-de-resumo.png"
        />
    </div>
    <div class="flex gap-4">
        <InfoTools
            title="Palavras Chave"
            description="With AI-powered image generation, designers and creatives can streamline their workflows and unlock new levels of efficiency."
            img="palavras-chave.png"
        />
        <InfoTools
            title="Perguntas e respostas"
            description="With AI-powered image generation, designers and creatives can streamline their workflows and unlock new levels of efficiency."
            img="perguntas-respostas.png"
        />
    </div>
</template>
<script>
import InfoTools from '@/components/InfoTool.vue'
export default {
    components: {
        InfoTools
    }
}
</script>
<style>
    
</style>