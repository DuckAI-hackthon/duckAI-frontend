<script>
import ListIcons from '../ListIcons.vue'
import ButtonUser from '../ButtonUser.vue'
export default {
    components: {
        ListIcons,
        ButtonUser
    }
}
</script>

<template>
    <div class="absolute right-0 top-0 p-4">
        <div
        class="cursor-pointer flex flex-row items-center justify-center text-center gap-3"
        >
            <ListIcons />
            <ButtonUser />
        </div>
    </div>
</template>