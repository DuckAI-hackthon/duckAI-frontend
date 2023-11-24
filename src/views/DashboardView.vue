<script>
import NavTopo from '@/components/navbar-dashboard/NavTopo.vue'
import NavLateral from '@/components/navbar-dashboard/NavLateral.vue'

export default {
    name: 'DashBoard',
    components: {
        NavTopo,
        NavLateral
    },
}
</script>

<template>
    <div class="w-screen h-screen bg-black text-white">
        <header>
            <NavTopo />
            <NavLateral />
        </header>
        <main>
            DashBoard
        </main>
        <footer>
        </footer>
    </div>
</template>