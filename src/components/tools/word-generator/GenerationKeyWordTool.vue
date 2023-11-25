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
  <section class="flex flexitem-center justify-center pt-44 pb-44">
    <div>
      <ToolTitle text="Geração de palavras-chave " />
      <div class="flex-center gap-10 pt-4">
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
    </div>
    <div class="flex-center gap-[7vw] gradient-border w-[60vw] fixed bottom-8">
      <input v-model="message" class="input-chat" type="text" />
      <button class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary">
        <img src="@/assets/images/pointer.png" alt="" class="w-[2vh] h-[2vh]" />
      </button>
    </div>
  </section>
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
