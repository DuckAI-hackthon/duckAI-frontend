<script>
import ToolTitle from "../ToolTitle.vue";

export default {
  name: "DashBoard",
  components: {
    ToolTitle,
  },
};
</script>
<template>
  <article>
    <ToolTitle text="Geração de palavras-chave " />
    <div class="flex-center gap-10">
      <div class="gradient-border w-4/6 h-[36vh]">
        <p class="w-full p-2">
          Seu texto aparece aqui.
        </p>
      </div>
      <div class="gradient-border h-[36vh] flex flex-col justify-start gap-4 items-center">
        Palavras Chave
        <ul class="text-sm justify-start items-center text-white px-4 flex flex-col gap-4 p-2">
          <li>
            palavras
          </li>
        </ul>
      </div>
    </div>
  </article>
  <div class="flex-center gap-[7vw] gradient-border absolute bottom-8">
    <input v-model="text" class="input-chat pl-8" type="text" placeholder="Digite seu texto aqui" />
    <button @click="postGeneratorText" class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary">
        <img src="@/assets/images/pointer.png" alt="" class="w-[2vh] h-[2vh]" />
    </button>
  </div>
</template>
<style>
.input-number {
    @apply py-3 px-4 rounded-[10px] ;
    border: 1px solid #6843EC;
    background: #19161C;
    box-shadow: 0px 58px 80px 0px rgba(0, 0, 0, 0.16);
    resize: none;

}
</style>
