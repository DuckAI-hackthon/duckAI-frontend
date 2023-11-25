<script>
import PdfSvgComponent from '@/components/icons/PdfSvgComponent.vue'
import ArrowsSvgComponent from '@/components/icons/ArrowsSvgComponent.vue'

export default {
    components: {
        ArrowsSvgComponent,
        PdfSvgComponent
    },
}

</script>

<template>
    <section class="flex flex-row justify-between mt-[10vh] pb-[19vh]">
        <div class="flex-col-center">
            <div class="flex gap-3 flex-row">
                <select class="font-light gradient-border text-white w-[20vw]" name="" id="">
                    <option value="">Português</option>
                    <option value="">Inglês</option>
                    <option value="">Alemão</option>
                </select>
                <div class=" gradient-borderflex justify-center gradient-border">
                    <PdfSvgComponent />
                </div>
            </div>
            <textarea class="gradient-border text-white  mt-10 w-[24vw] h-[30vh]" name="" id=""
                placeholder="Digitar texto"></textarea>
        </div>
        <div>
            <ArrowsSvgComponent />
        </div>

        <div class="flex-col-center">
            <div class="flex gap-3 flex-row">
                <select class="font-light gradient-border text-white w-[24vw]" name="" id="">
                    <option value="">Português</option>
                    <option value="">Inglês</option>
                    <option value="">Alemão</option>
                </select>
            </div>
            <textarea class="gradient-border text-white  mt-10 w-[24vw] h-[30vh]" name="" id=""
                placeholder="Digitar texto"></textarea>
        </div>
    </section>
</template>