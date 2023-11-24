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
    <div class="w-screen h-screen bg-black text-white">
        <div class="container-content pt-4">
            <NavGetSarted />
            <ContainerMain>
                <TitleSpecial :text="title" />
                <SubTitle :text="subTitle" />
                <ButtonGetStarted text="Get Started" />
            </ContainerMain> 
            <footer>
                <ShortCredit />
                <RouterLink to="/dashboard">
                    Login
                    </RouterLink>

            </footer>
        </div>
    </div>
</template>

<!-- https://slice.wbrain.me/#/board/oZixacSQez8hjJTmkT -->