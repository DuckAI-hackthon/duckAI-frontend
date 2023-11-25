<script>
import ButtonLoginRegister from '../ButtonLoginRegister.vue';

export default {
    components: {
        ButtonLoginRegister
    },
};
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
            <ButtonLoginRegister text="Logar" link="/"/>
            <p class="text-sm">Ainda não possuí uma conta? <router-link to="/register">Registre-se!</router-link></p>
        </label>
    </form>

</template>