<template lang="">
    <div class="flex bg-white text-black rounded-full items-center gap-4 pl-8 p-2">
        <span class="">
            <router-link to="/login">
                Login
            </router-link>
        </span>
        <button class="bg-primary text-white p-2 px-8 cursor-pointer rounded-3xl">
            Get Started
        </button>
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