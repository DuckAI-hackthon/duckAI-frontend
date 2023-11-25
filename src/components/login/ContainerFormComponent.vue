<script>
import TitleH1 from '@/components/TitleH1.vue'
import ContainerForm from './ContainerForm.vue'

export default {
    components: {
        TitleH1,
        ContainerForm
    }
};
</script>

<template>
    <div class=" z-50 flex-col-center bg-white border-40 rounded-[25px] px-[4vw] py-[6vh]">
        <div class="flex-col gap-4">
            <TitleH1 text="Login" />
            <ContainerForm />
        </div>
    </div>
</template>