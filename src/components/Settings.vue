<template>
  <Popover class="absolute top-4 right-4 h-8">
    <PopoverButton>
      <CogIcon class="h-8 w-8 text-black dark:text-white" />
    </PopoverButton>
    <PopoverPanel
      class="absolute z-10 right-0 top-full mt-4 bg-white rounded p-4 shadow"
    >
      <Switch
        v-model="isDark"
        :class="isDark ? 'bg-teal-900' : 'bg-teal-700'"
        class="relative inline-flex items-center h-12 rounded-full w-20"
      >
        <span class="sr-only">Enable dark mode</span>
        <span
          :class="isDark ? 'translate-x-10' : 'translate-x-2'"
          class="
            inline-flex
            content-center
            justify-center
            items-center
            w-8
            h-8
            transform
            bg-white
            rounded-full
            transition-transform
          "
        >
          <component :is="darkModeIcon" class="h-4 w-4 text-black" />
        </span>
      </Switch>
    </PopoverPanel>
  </Popover>
</template>

<script setup lang="ts">
import { CogIcon, MoonIcon, SunIcon } from '@heroicons/vue/outline';
import { Popover, PopoverButton, PopoverPanel, Switch } from '@headlessui/vue';
import { useDark } from '@vueuse/core';
import { computed } from 'vue';

const isDark = useDark({ storageKey: 'theme' });

const darkModeIcon = computed(() => (isDark.value ? MoonIcon : SunIcon));
</script>

<style scoped></style>
