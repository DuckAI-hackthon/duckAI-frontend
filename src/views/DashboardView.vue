<script>
import TopNav from '@/components/navbar-dashboard/TopNav.vue'
import SideNav from '@/components/navbar-dashboard/SideNav.vue'

export default {
    name: 'DashBoard',
    components: {
        TopNav,
        SideNav
    },
}
</script>

<template>
    <div class="w-full flex justify-center items-center bg-black text-white">
        <header>
            <TopNav />
            <SideNav />
        </header>
        <main class="mt-32 w-8/12 bg-red-500 m-auto">
            <div class="w-full min-h-screen bg-blue-500">
                DashBoard
            </div>
        </main>
        <footer>
        </footer>
    </div>
</template>