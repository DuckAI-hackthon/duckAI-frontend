<script>
import TopNav from '@/components/navbar-dashboard/TopNav.vue'
import SideNav from '@/components/navbar-dashboard/SideNav.vue'
import ShowTools from '@/components/ShowTools.vue'
import TraductionToolComponent from '@/components/tools/TraductionToolComponent.vue'
import GenerationKeyWordToolComponent from '@/components/tools/GenerationKeyWordToolComponent.vue'
export default {
    name: 'DashBoard',
    components: {
        TopNav,
        SideNav,
        ShowTools,
        TraductionToolComponent,
        GenerationKeyWordToolComponent
    },
    data(){
        return {
            mainContent: 'InfoTools',
        }
    },
    methods: {
        changeTo(slug) {
            console.log(slug);
            this.mainContent = slug;
        }
    }
}
</script>

<template>
    <div class="w-full flex justify-center items-center bg-black2 text-white">
        <header>
            <TopNav 
                @changeToolNav="changeTo($event)"
            />
            <SideNav />
        </header>
        <main class="pt-32 w-8/12 m-auto h-screen">
            <KeepAlive>
                <showTools @changeContentTo="changeTo($event)" v-if="mainContent === 'InfoTools'" />
                <TraductionToolComponent v-else-if="mainContent === 'TraductionToolComponent'" />
                <GenerationTextToolComponent v-else-if="mainContent === 'GenerationTextToolComponent'" />
                <GenerationKeyWordToolComponent v-else-if="mainContent === 'GenerationKeyWordToolComponent'" />
                <QuestionAndAnswerToolComponent v-else-if="mainContent === 'QuestionAndAnswerToolComponent'" />
            </KeepAlive>
        </main>
        <footer>
        </footer>
    </div>
</template>

<style scoped>
.bg-black2 {
    background-color: #0000007e;
}
</style>