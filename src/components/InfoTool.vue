<template>
    <article>
        <div class="flex justify-start items-center pb-2">
            <img :src="`./images/icons/${img}`" alt="img" class="w-10 pr-2 py-2">
            <h2 class="text-2xl">{{ title }}</h2>
        </div>
        <p>{{ description }}</p>
        <h3 class="block pt-2 cursor-pointer">
            Acessar Feramenta
        </h3>
    </article>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    },
}
</script>
<style>
article {
    color: #666;
    padding: 3em;
}
article h3 {
    transition: all .3s ease-in-out;
}
 article:hover h3 {
    color: #6843EC;
}
</style>