<template lang="">
    <div class="flex bg-white text-black rounded-full items-center gap-4 pl-8 p-2">
        <span class="hover:underline">
            <router-link to="/login">
                Login
            </router-link>
        </span>
        <router-link to="/register">
        <button class="bg-primary hover:bg-indigo-700 transition-all text-white p-2 px-8 cursor-pointer rounded-3xl">
                Crie uma conta
            </button>
        </router-link>
            <!-- @clickButtonPrimary="clickButtonPrimary"  -->
    </div>
</template>
<script>
export default {
    components: {
    },
    // methods: {
    //     clickButtonPrimary() {
    //         this.$router.push('/register')
    //     }
    // }
}
</script>
<style lang="">
    
</style>