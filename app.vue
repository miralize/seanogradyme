<template>
  <div class="min-h-screen bg-app-bg">
    <div class="container mx-auto py-14">
      <div class="group grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
        <HomeImage />
        <HomeIntro class="z-0 col-span-3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeIntro from './src/components/HomeIntro.vue';
import HomeImage from './src/components/HomeImage.vue';
</script>

<style></style>
