<script>
import TopNav from '@/components/navbar-dashboard/TopNav.vue'
import SideNav from '@/components/navbar-dashboard/SideNav.vue'
import TraductionToolComponent from '@/components/tools/TraductionToolComponent.vue'

export default {
    name: 'DashBoard',
    components: {
        TopNav,
        SideNav,
        TraductionToolComponent
    },
}
</script>

<template>
    <div class="w-full flex justify-center items-center bg-black text-white">
        <header>
            <TopNav />
            <SideNav />
        </header>
        <main class="mt-32 w-8/12  m-auto">
            <TraductionToolComponent/>
        </main>
        <footer>
        </footer>
    </div>
</template>