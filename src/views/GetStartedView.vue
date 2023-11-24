<script>
import LoginGetSarted from '@/components/get-started/LoginGetSarted.vue'
import ShortCredit from '@/components/ShortCredit.vue'
import TitleSpecial from '@/components/TitleSpecial.vue'
import SubTitle from '@/components/SubTitle.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ContentainerComp from '@/components/ContentainerComp.vue'

export default {
    name: 'GetStarted',
    components: {
        LoginGetSarted,
        ShortCredit,
        TitleSpecial,
        SubTitle,
        ButtonPrimary,
        ContentainerComp,
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
        <header>
            <LoginGetSarted />
        </header>
        <main>
            <ContentainerComp>
                <TitleSpecial />
                <SubTitle  />
                <ButtonPrimary />
            </ContentainerComp> 
        </main> 
        <footer>
            <ShortCredit />
        </footer> 
    </div>
</template>