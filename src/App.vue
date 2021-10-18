<template>
  <div class="min-h-screen bg-white dark:bg-app-bg">
    <div class="container mx-auto py-14">
      <Settings />
      <div class="grid grid-cols-1 group lg:grid-cols-4 lg:gap-8">
        <Image />
        <Intro class="col-span-3 z-0" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Intro from '@/components/Intro.vue';
import Settings from '@/components/Settings.vue';
import Image from '@/components/Image.vue';
</script>

<style></style>
