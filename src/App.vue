<template>
  <div class="container mx-auto min-h-screen">
    <Settings />
    <div class="flex gap-4">
      <Image />
      <Intro />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Intro from '@/components/Intro.vue';
import Settings from '@/components/Settings.vue';
import Image from '@/components/Image.vue';
</script>

<style></style>
