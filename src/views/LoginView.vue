<script >
import ContainerFormComponent from '../components/login/ContainerFormComponent.vue'
import CirclesComponent from '../components/login/CirclesComponent.vue'

export default {
    components: {
        ContainerFormComponent,
        CirclesComponent
    }
};

</script>

<template>
    <section class=" flex-center background">
        <CirclesComponent/>
        <div class="glass-background overflow-hidden"></div>
        <ContainerFormComponent />
    </section>
    <h1>Login</h1>
    <RouterLink to="/dashboard">Dashboard</RouterLink>
    <RouterLink to="/home">home</RouterLink>
    <router-link to="/login">Login</router-link>
</template>

<style scoped></style>