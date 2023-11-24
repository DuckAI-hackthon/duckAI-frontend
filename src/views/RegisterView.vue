<script >
import ContainerFormComponent from '../components/register/ContainerFormComponent.vue'
import CirclesComponent from '../components/register/CirclesComponent.vue'

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
</template>

<style scoped></style>