<template>
  <img alt="Sean O'Grady" src="./assets/avatar.jpg" />
  <Intro
    msg="Hello Vue 3 + TypeScript + Vite"
    msg3="Hello Vue 3 + TypeScript + Vite"
    :msg5="'Hello Vue 3 + TypeScript + Vite'"
  />
</template>

<script lang="ts">
import Intro from '@/components/Intro.vue';

export default {
  components: { Intro },
};
</script>

<style></style>
