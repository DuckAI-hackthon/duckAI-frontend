<template>
    <div class="flex justify-center items-center gap-4">
        <InfoTools
            title="Tradução de texto"
            description="With AI-powered image generation, designers and creatives can streamline their workflows and unlock new levels of efficiency."
            img="traducao-de-texto.png"
            slug="TraductionToolComponent"
            @changeTool="this.$emit('changeContentTo', 'TraductionToolComponent');"
        />
        <InfoTools
            title="Geração de resumo"
            description="With AI-powered image generation, designers and creatives can streamline their workflows and unlock new levels of efficiency."
            img="geracao-de-resumo.png"
            slug="GenerationTextToolComponent"
            @changeTool="this.$emit('changeContentTo', 'GenerationTextToolComponent');"
        />
    </div>
    <div class="flex gap-4">
        <InfoTools
            title="Palavras Chave"
            description="With AI-powered image generation, designers and creatives can streamline their workflows and unlock new levels of efficiency."
            img="palavras-chave.png"
            slug="GenerationKeyWordToolComponent"
            @changeTool="this.$emit('changeContentTo', 'GenerationKeyWordToolComponent');"
        />
        <InfoTools
            title="Perguntas e respostas"
            description="With AI-powered image generation, designers and creatives can streamline their workflows and unlock new levels of efficiency."
            img="perguntas-respostas.png"
            slug="QuestionAndAnswerToolComponent"
            @changeTool="this.$emit('changeContentTo', 'QuestionAndAnswerToolComponent');"
        />
    </div>
</template>
<script>
import InfoTools from '@/components/InfoTool.vue'
export default {
    components: {
        InfoTools
    },
}
</script>
<style>
    
</style>