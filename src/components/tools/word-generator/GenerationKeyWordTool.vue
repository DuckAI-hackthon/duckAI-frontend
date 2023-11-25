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
      <div class="text-box">
        <textarea class="outline-none focus:border-none resize-none bg-transparent text-sm	 text-white p-2 ml-2 mt-1 w-[23vw] h-[28vh]"
          name="" id=""></textarea>
        <input class="input-number p-0 text-sm mr-6 mt-6 w-10 h-10" type="number">
      </div>
      <ul class="gradient-border w-[38vw] h-[29vh] flex">
        <li class="text-sm text-white p-2 ml-2 mt-1 w-[37vw] h-[25vh]" >Palavra-chave</li>
      </ul>
    </div>
  </article>
  <div class="flex-center gap-[7vw]	gradient-border w-[60vw] absolute bottom-8">
            <input class="input-chat" type="text">
            <button class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary"><img src="@/assets/images/pointer.png"
                    alt="" class=" w-[2vh] h-[2vh]" /> </button>
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
