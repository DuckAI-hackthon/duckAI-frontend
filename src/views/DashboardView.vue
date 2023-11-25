<script>
import TopNav from '@/components/navbar-dashboard/TopNav.vue'
import SideNav from '@/components/navbar-dashboard/SideNav.vue'
import ShowTools from '@/components/ShowTools.vue'
import TraductionToolComponent from '@/components/tools/TraductionToolComponent.vue'
import GenerationTextToolComponent from '@/components/tools/GenerationTextToolComponent.vue'

export default {
    name: 'DashBoard',
    components: {
        TopNav,
        SideNav,
        ShowTools,
        GenerationTextToolComponent,
        TraductionToolComponent,
    },
    data(){
        return {
            mainContent: 'GenerationTextToolComponent',
        }
    }
}
</script>

<template>
    <div class="w-full h-full flex justify-center items-center bg-black text-white">
        <header>
            <TopNav />
            <SideNav />
        </header>
        <main class="pt-32 w-8/12 m-auto h-screen">
            <showTools v-if="mainContent === 'InfoTools'" />
            <TraductionToolComponent v-else-if="mainContent === 'TraductionToolComponent'" />
            <GenerationTextToolComponent v-else-if="mainContent === 'GenerationTextToolComponent'" />
            <GenerationKeyWordToolComponent v-else-if="mainContent === 'GenerationKeyWordToolComponent'" />
            <QuestionAndAnswerToolComponent v-else-if="mainContent === 'QuestionAndAnswerToolComponent'" />
        </main>
        <footer>
        </footer>
    </div>
</template>
