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
        <input class=" p-0 text-sm mt-6 w-10 h-10" type="number">
      </div>
      <div class="keyWords">
        <textarea class="resize-none bg-transparent text-sm	 text-white p-2 ml-2 mt-1 w-[23vw] h-[28vh]" name="" id=""></textarea>
      </div>
    </div>
  </article>
</template>
<style>
input{
    @apply py-3 px-4 rounded-[10px] ;
    border: 1px solid #6843EC;
    background: #19161C;
    box-shadow: 0px 58px 80px 0px rgba(0, 0, 0, 0.16);
    resize: none;

}


.title {
  display: flex;
  justify-content: center;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.96px;
  background: linear-gradient(90deg,
      #ff3bff 0%,
      #ecbfbf 38.02%,
      #5c24ff 75.83%,
      #d94fd5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-box {
  width: 29vw;
  height: 29vh;
  display: flex;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid #6843ec;
  background: #19161c;
  box-shadow: 0px 58px 80px 0px rgba(0, 0, 0, 0.16);
  color: #8b8d90;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.64px;
}

.text {
  font-size: 2rem;
  color: #8b8d90;
  margin: 3vh 0 0 2vw;
}

.contWord {
  color: #8b8d90;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  border-radius: 14px;
  border: 1px solid #6843ec;
  background: #19161c;
  width: 42px;
  height: 44px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 3vh 2vw 0 auto;
}

.keyWords {
  width: 38vw;
  height: 29vh;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid #6843ec;
  background: #19161c;
  box-shadow: 0px 58px 80px 0px rgba(0, 0, 0, 0.16);
}
</style>
