<script>
import NavGetSarted from '@/components/get-started/NavGetSarted.vue'
import ShortCredit from '@/components/ShortCredit.vue'
import TitleSpecial from '@/components/TitleSpecial.vue'
import SubTitle from '@/components/SubTitle.vue'
import ButtonGetStarted from '@/components/ButtonGetStarted.vue'
import ContainerMain from '@/components/ContainerMain.vue'

export default {
    name: 'GetStarted',
    components: {
        NavGetSarted,
        ShortCredit,
        TitleSpecial,
        SubTitle,
        ButtonGetStarted,
        ContainerMain,
    },  
    data() {
        return {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
        }
    }
}
</script>

<template>
    <div class="w-screen h-screen bg-black text-white box-border">
        <div class="container-content h-full pt-4 flex-col flex justify-between box-border ">
            <NavGetSarted />
            <ContainerMain class="flex justify-between items-center overflow-visible">
                <div  class="gap-4 w-full flex flex-col">
                    <TitleSpecial :text="title" />
                    <SubTitle :text="subTitle" />
                    <ButtonGetStarted text="Get Started" />
                </div>
                <div>
                    <img :src="`./images/pato4.png`" alt="">
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