/* eslint-disable import/prefer-default-export */
import { useDark, usePreferredDark } from '@vueuse/core';

const isDark = useDark({ storageKey: 'theme' });
const preferredDark = usePreferredDark();

export function useDarkMode() {
  return {
    isDark,
    preferredDark,
    resetDarkMode: () => {
      isDark.value = preferredDark.value;
    },
  };
}
