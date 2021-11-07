<template>
  <DiamondClip class="sr-only" />
  <transition appear>
    <div class="flex items-center justify-center">
      <div class="relative">
        <div
          class="
            absolute
            w-[277px]
            h-[277px]
            rounded-3xl
            rotate-45
            border border-solid border-teal-500
            translate-x-[60px] translate-y-[70px]
            group-hover:scale-[200%] group-hover:animate-pulse
            transition-transform
            duration-1000
          "
        ></div>
        <div
          class="
            absolute
            w-[277px]
            h-[277px]
            rounded-3xl
            rotate-45
            border border-solid border-yellow-400
            translate-y-[0px]
            group-hover:scale-[200%] group-hover:animate-pulse
            transition-transform
            duration-1000
          "
        ></div>
        <div
          class="
            absolute
            w-[277px]
            h-[277px]
            rounded-3xl
            rotate-45
            border border-solid border-pink-400
            translate-x-[-30px] translate-y-[50px]
            group-hover:scale-[200%] group-hover:animate-pulse
            transition-transform
            duration-1000
          "
        ></div>
        <div class="clip transform-gpu max-w-sm shadow-2xl">
          <img
            alt="Sean O'Grady"
            class="object-cover object-center"
            src="../assets/avatar.jpg"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import DiamondClip from '@/assets/DiamondClip.svg?component';
</script>

<style scoped>
.clip {
  clip-path: url('#svgClip');
}
</style>
