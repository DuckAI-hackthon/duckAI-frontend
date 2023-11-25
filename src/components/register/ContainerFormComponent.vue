<script>
import TitleLoginComponent from './TitleLoginComponent.vue'
import ContainerForm from './ContainerForm.vue'

export default {
    components: {
        TitleLoginComponent,
        ContainerForm
    }
};
</script>

<template>
    <div class=" z-50 flex-col-center bg-white border-40 rounded-[25px] px-[4vw] py-[6vh]">
        <div class="flex-col gap-4">
            <TitleLoginComponent />
            <ContainerForm />
        </div>
    </div>
</template>