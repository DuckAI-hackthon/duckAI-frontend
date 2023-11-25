<script setup>
import SimpleArrowComponent from '../components/icons/SimpleArrowComponent.vue';

import { dashboardStore } from '@/stores/dashboard'

const myStore = dashboardStore();

function changeTo(slug) {   
    myStore.changeContentTo(slug)
}


</script>

<template>
    <div class=" mt-[20vh] pb-[28vh] ml-[4vw]  bg-transparent	flex flex-col">
        <h1 class="text-white mb-[15vh] text-4xl ">Configurações</h1>
        <div class="flex flex-row gap-40">

            <div>
                <div @click="changeTo('EditProfileComponent')" class="w-[20vw] justify-between text-lg flex flex-row gap-1 mb-8 cursor-pointer	" for="">
                    <p>Editar perfil</p>
                    <SimpleArrowComponent />
                </div>

                <div class="w-[20vw] justify-between text-lg flex flex-row gap-1 mb-8 cursor-pointer	" for="">
                    <p>Mudar senha</p>
                    <SimpleArrowComponent />
                </div>

                <div class="w-[20vw] justify-between text-lg flex flex-row gap-1 mb-8 cursor-pointer" for="">
                    <p>Notificações</p>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="w-[20vw] justify-between text-lg flex flex-row gap-1 mb-8 cursor-pointer" for="">
                    <p>Modo noturno</p>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <div>
                <div class="w-[20vw] justify-between text-lg flex flex-row gap-1 mb-8 cursor-pointer	" for="">
                    <p>Sobre nós</p>
                    <SimpleArrowComponent />
                </div>
                <div class="w-[20vw] justify-between text-lg flex flex-row gap-1 mb-8 cursor-pointer	" for="">
                    <p>Politica de privacidade</p>
                    <SimpleArrowComponent />
                </div>
                <div class="w-[20vw] justify-between text-lg flex flex-row gap-1 mb-8 cursor-pointer	" for="">
                    <p>Termos e condições</p>
                    <SimpleArrowComponent />
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #6843EC;
}

input:focus + .slider {
  box-shadow: 0 0 1px #6843EC;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>