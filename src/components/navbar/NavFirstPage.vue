<template>
    <div class="flex justify-between w-full items-center">
        <div>
            <img :src="`./images/logo.png`" alt="logo" class="w-32">
        </div>
        <nav>
            <ul class="flex gap-4 m-4 items-center">
                <NavLi>
                    <ButtonPrimary text="Sobre Nós" />
                </NavLi>
                <NavLi>
                    <ButtonLoginSpecial />
                </NavLi>
            </ul>
        </nav>
    </div>
</template>
<script>
import NavLi from './NavLi.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ButtonLoginSpecial from '@/components/ButtonLoginSpecial.vue'

export default {
    components: {
        NavLi,
        ButtonPrimary,
        ButtonLoginSpecial
    }    
}
</script>