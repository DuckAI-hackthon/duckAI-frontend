<script setup>
import { onMounted } from "vue";

import { useOtherStore } from "./stores/others";

const otherStore = useOtherStore();

onMounted(() => {
  otherStore.getAis();
});
</script>

<template>
  <RouterView />
</template>
