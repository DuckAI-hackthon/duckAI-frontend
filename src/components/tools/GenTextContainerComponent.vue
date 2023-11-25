<template>
    <div class="flex-col-center gap-10 xl:mt-20">
        <div class="flex flex-row gap-4 ">
            <div class="gradient-border h-[6.5vh]">
                <img src="@/assets/images/user.png" alt="" class=" w-[3vh] h-[3vh]" />
            </div>
            <p class="w-[35vw]">Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.
                Lorem Ipsum has been the Lorem Ipsum </p>

        </div>
        <div class="flex flex-row gap-4 ">
            <div class="gradient-border h-[6.5vh]">
                <img src="@/assets/images/user.png" alt="" class=" w-[3vh] h-[3vh]" />
            </div>
            <p class="w-[35vw]">Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.
                Lorem Ipsum has been the Lorem Ipsum </p>

        </div>
        <div class="flex-center gap-[7vw]	gradient-border w-[60vw] absolute bottom-8">
            <input class="input-chat" type="text">
            <button class="flex-center rounded-lg w-[4.5vh] h-[4.5vh] bg-primary"><img src="@/assets/images/pointer.png"
                    alt="" class=" w-[2vh] h-[2vh]" /> </button>
        </div>
    </div>
</template>

<style>
div .gradient-border:nth-child(3) {
    @apply p-0;

}

.input-chat {
    @apply w-[50vw] h-[6vh] px-3 outline-none focus:border-[#6843EC];
    background: none;

}
</style>