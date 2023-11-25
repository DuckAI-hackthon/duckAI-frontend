<script>
import TopNav from "@/components/navbar-dashboard/TopNav.vue";
import SideNav from "@/components/navbar-dashboard/SideNav.vue";
import ToolTitleComponent from "@/components/tools/ToolTitleComponent.vue";

export default {
  name: "DashBoard",
  components: {
    TopNav,
    SideNav,
    ToolTitleComponent,
  },
};
</script>
<template>
  <div class="w-full flex justify-center items-center bg-black text-white">
    <header>
      <TopNav />
      <SideNav />
    </header>
    <main class="mt-32 w-8/12 m-auto">
      <ToolTitleComponent text="Geração de palavras-chave " class="title" />
      <div class="content">
          <div class="text-box">
              <p class="text">Texto</p>
              <div class="contWord">10</div>
            </div>
            <div class="keyWords">
                <p class="text">oi</p>
            </div>
        </div>
    </main>
    <footer></footer>
  </div>
</template>
<style>
.content{
    display: flex;
    justify-content: center;
    gap: 2.5vw;
    margin-top: 15vh;
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
  background: linear-gradient(
    90deg,
    #ff3bff 0%,
    #ecbfbf 38.02%,
    #5c24ff 75.83%,
    #d94fd5 100%
  );
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
