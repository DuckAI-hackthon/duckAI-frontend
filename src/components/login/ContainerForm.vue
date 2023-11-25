<script>

</script>

<template>
    <form class="flex-col-center gap-2" action="">
        <label>
            <p class="text-sm">E-mail</p>
            <input class="input-login my-1" type="email">
        </label>
        <label>
            <div class="flex flex-row just items-center justify-between	">
                <p class="text-sm">Senha</p>
                <p class="text-xs">Mostrar</p>
            </div>
            <input class="input-login my-1" type="password">
            <p class="text-xs">Use 8 caracteres ou mais.</p>
        </label>
        <label class="flex-login gap-4 pt-4">
            <div class="btn-primary hover:bg-indigo-700">
                Login
            </div>      
            <p class="text-sm text-left">Não possuí uma conta? <br> Cadastre-se!</p>
        </label>
    </form>

</template>
<style scoped>
.btn-primary {
    @apply bg-primary opacity-70 text-black p-3 px-5 cursor-pointer duration-300 rounded-full hover:opacity-100;
}
</style>