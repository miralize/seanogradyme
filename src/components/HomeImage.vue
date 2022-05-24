<template>
  <DiamondClip class="sr-only" />
  <transition appear>
    <div class="flex items-center justify-center">
      <div class="relative">
        <div
          class="absolute h-[277px] w-[277px] translate-x-[60px] translate-y-[70px] rotate-45 rounded-3xl border border-solid border-teal-500 transition-transform duration-1000 group-hover:scale-[200%] group-hover:animate-pulse"
        ></div>
        <div
          class="absolute h-[277px] w-[277px] translate-y-[0px] rotate-45 rounded-3xl border border-solid border-yellow-400 transition-transform duration-1000 group-hover:scale-[200%] group-hover:animate-pulse"
        ></div>
        <div
          class="absolute h-[277px] w-[277px] translate-x-[-30px] translate-y-[50px] rotate-45 rounded-3xl border border-solid border-pink-400 transition-transform duration-1000 group-hover:scale-[200%] group-hover:animate-pulse"
        ></div>
        <div
          class="clip max-w-sm transform-gpu shadow-2xl"
          style="clip-path: url('#svgClip')"
          :class="{ 'mix-blend-multiply': !isDark }"
        >
          <img
            alt="Sean O'Grady"
            class="object object-center"
            src="../assets/avatar.jpg"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import DiamondClip from '@/assets/DiamondClip.svg';
import { usePreferredDark } from '@vueuse/core';

const isDark = usePreferredDark();
</script>
