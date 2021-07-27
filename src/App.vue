<template>
  <div class="min-h-screen bg-white dark:bg-teal-900">
    <div class="container mx-auto">
      <Settings />
      <div class="grid grid-cols-4 gap-8">
        <Image class="col-span-1" />
        <Intro class="col-span-3" />
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
