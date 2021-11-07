<template>
  <div class="min-h-screen bg-white dark:bg-app-bg">
    <div class="container mx-auto py-14">
      <DarkModeToggle />
      <div class="grid grid-cols-1 group lg:grid-cols-4 lg:gap-8">
        <HomeImage />
        <HomeIntro class="col-span-3 z-0" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeIntro from '@/components/HomeIntro.vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import HomeImage from '@/components/HomeImage.vue';
</script>

<style></style>
