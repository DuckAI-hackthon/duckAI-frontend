<script>
import TopNav from '@/components/navbar-dashboard/TopNav.vue'
import SideNav from '@/components/navbar-dashboard/SideNav.vue'
import ShowTools from '@/components/ShowTools.vue'
import TraductionToolComponent from '@/components/tools/TraductionToolComponent.vue'

export default {
    name: 'DashBoard',
    components: {
        TopNav,
        SideNav,
        ShowTools,
        TraductionToolComponent
    },
    data(){
        return {
            mainContent: 'InfoTools',
        }
    }
}
</script>

<template>
    <div class="w-full flex justify-center items-center bg-black text-white">
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
