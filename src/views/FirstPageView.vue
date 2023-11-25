<script>
import NavFirstPage from '@/components/NavFirstPage.vue'
import ShortCredit from '@/components/ShortCredit.vue'
import TitleSpecial from '@/components/TitleSpecial.vue'
import SubTitle from '@/components/SubTitle.vue'
import ButtonGetStarted from '@/components/ButtonGetStarted.vue'
import ContainerMain from '@/components/ContainerMain.vue'

export default {
    name: 'FirstPage',
    components: {
        NavFirstPage,
        ShortCredit,
        TitleSpecial,
        SubTitle,
        ButtonGetStarted,
        ContainerMain,
    },  
    data() {
        return {
            title: 'IA em Ação.',
            subTitle: 'Tradução imediata, resumo instantâneo, geração veloz e respostas rápidas: Desbloqueando o potencial do texto com IA.'
        }
    }
}
</script>

<template>
    <div class="w-screen h-screen text-white box-border">
        <div class="container-content h-full pt-4 flex-col flex justify-between box-border ">
            <NavFirstPage />
            <ContainerMain class="flex justify-between items-center overflow-visible">
                <div  class="gap-4 w-full flex flex-col">
                    <TitleSpecial :text="title" />
                    <SubTitle :text="subTitle" />
                    <ButtonGetStarted class="mt-6" text="Comece agora!" />
                </div>
                <div>
                    <img :src="`./images/logo-pato.png`" alt="">
                </div>
            </ContainerMain> 
            <footer>
                <ShortCredit />
            </footer>
        </div>
    </div>
</template>

<style>

</style>

<!-- https://slice.wbrain.me/#/board/oZixacSQez8hjJTmkT -->