<template>
    <div class=" mt-[15vh] ml-[4vw]  bg-transparent	flex flex-col">
        <h1 class="text-white mb-20 text-4xl ">Editar Perfil</h1>
        
        <label class="flex flex-col gap-1 mb-8" for="">
        <p>Nome de usuário</p>
        <input class="text-sm gradient-border  w-[50vw]" placeholder="Mehrab"  type="text">    
        </label>
        
        <label class="flex flex-col gap-1 mb-8" for="">
        <p>Email</p>
        <input class=" text-sm gradient-border  w-[50vw]" placeholder="Mehrabbozorgi.business@gmail.com"  type="text">
        </label>
        
        <label class="flex flex-col gap-1 mb-8" for="">
        <p>Senha</p>
        <input class=" text-sm gradient-border  w-[50vw]" placeholder="sbdfbnd65sfdvbs"  type="text">
        </label>
        <div class="flex flex-row gap-7">
            <button class="bg-purple px-4 py-2 rounded-xl">Cancelar</button>
            <button class="bg-purple px-4 py-2 rounded-xl">Salvar</button>
        </div>
    </div>
</template>