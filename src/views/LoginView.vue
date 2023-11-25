<script >
import FormLogin from '../components/login/FormLogin.vue'
import CirclesComponent from '../components/login/CirclesComponent.vue'
import TitleH1 from '../components/TitleH1.vue'

export default {
    components: {
        TitleH1,
        FormLogin,
        CirclesComponent
    }
};

</script>

<template>
    <section class=" flex-center background">
        <CirclesComponent/>
        <div class="glass-background overflow-hidden"></div>
        <div class=" z-50 flex-col-center bg-white border-40 rounded-[25px] px-[4vw] py-[6vh]">
        <div class="flex-col gap-4">
            <TitleH1 text="Login" />
            <FormLogin />
        </div>
    </div>
    </section>
</template>
