<script>
import PdfSvgComponent from '@/components/icons/PdfSvgComponent.vue'

export default {
    components: {
        PdfSvgComponent,
    },
}

</script>

<template>
    <section class="flex flex-row justify-between mt-[10vh]">
        <div>
            <div class="flex flex-row gradient-border">

                <select name="" id="">
                    <option value="">Português</option>
                    <option value="">Inglês</option>
                    <option value="">Alemão</option>
                </select>
                <div class="flex justify-center gradient-border">
                    <PdfSvgComponent />
                </div>
            </div>
        </div>
        <div>
        </div>


        <div>
            <select name="" id="">
                <option value="">Português</option>
                <option value="">Inglês</option>
                <option value="">Alemão</option>
            </select>
        </div>
    </section>
</template>