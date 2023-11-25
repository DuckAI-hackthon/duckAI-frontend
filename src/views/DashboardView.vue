<script setup>
import TopNav from '@/components/navbar/TopNav.vue'
import SideNav from '@/components/navbar/SideNav.vue'
// import ShowTools from '@/components/tools/ShowTools.vue'
// import TraductionTool from '@/components/tools/tradution-generator/TraductionTool.vue'
// import GenerationKeyWordTool from '@/components/tools/word-generator/GenerationKeyWordTool.vue'
// import GenerationTextTool from '@/components/tools/text-generator/GenerationTextTool.vue'
// import QuestionAndAnswerTool from '@/components/tools/question-generator/QuestionAndAnswerTool.vue'
// import EditProfileComponent from '@/components/EditProfileComponent.vue'
import ConfigComponent from '@/components/ConfigComponent.vue'
import { dashboardStore } from '@/stores/dashboard.js'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const myStore = dashboardStore();
const userStore = useUserStore();
const router = useRouter(); 

function changeContent(newContent) {
    myStore.changeContentTo(newContent);
}

onMounted(() => {
    if(userStore.userData.email === null || userStore.userData.email === undefined || userStore.userData.email === '') {
        console.log('Faça login para continuar')
        router.push('/login');
    }
})

</script>

<template>
    <div class="w-full flex justify-center items-center bg-black2 text-white">
        <header>
            <TopNav 
                @changeToolNav="changeContent($event)"
            />
            <SideNav />
        </header>
        <main class="w-8/12 m-auto">
            <!-- <KeepAlive>
                <showTools @changeContentTo="changeContent($event)" v-if="myStore.mainContent === 'InfoTools'" />
                <TraductionTool v-else-if="myStore.mainContent === 'TraductionToolComponent'" />
                <GenerationTextTool class="mb-44" v-else-if="myStore.mainContent === 'GenerationTextToolComponent'" />
                <GenerationKeyWordTool class="mb-44" v-else-if="myStore.mainContent === 'GenerationKeyWordToolComponent'" />
                <QuestionAndAnswerTool class="mb-44" v-else-if="myStore.mainContent === 'QuestionAndAnswerToolComponent'" />
            </KeepAlive> -->
            <ConfigComponent/>
            <!-- <EditProfileComponent/> -->
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
