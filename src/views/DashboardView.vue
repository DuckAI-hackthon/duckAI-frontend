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
    <div class="w-screen h-screen bg-black text-white">
        <header>
            <TopNav />
            <SideNav />
        </header>
        <main>
            DashBoard
        </main>
        <footer>
        </footer>
    </div>
</template>