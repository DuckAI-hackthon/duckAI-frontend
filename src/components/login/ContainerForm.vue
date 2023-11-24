<template>
    <form class="flex-col-center gap-2" action="">
                <label>
                    <p class="text-xs  mt-5">Nome</p>
                    <input class="input-login my-1" type="text">
                </label>

                <label>
                    <p class="text-sm">E-mail</p>
                    <input class="input-login my-1" type="email">
                </label>

                <label>
                    <p class="text-sm">Senha</p>
                    <input class="input-login my-1" type="password">
                    <p class="text-xs">Use 8 caracteres ou mais.</p>
                </label>

                <label>
                    <p class="text-sm">Confirmação de senha</p>
                    <input class="input-login my-1" type="password">
                    <p class="text-xs">Use 8 caracteres ou mais.</p>
                </label>

                <p class="text-xs mt-3">Concordo com nossos Termos de uso e Política de privacidade</p>
                <label class="flex-login gap-4">
                    <button class="login-btn ">Cadastrar</button>
                    <p class="text-sm">Já possuí conta? Faça Login </p>
                </label>
            </form>
</template>