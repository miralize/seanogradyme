import { useNow } from '@vueuse/core';
import { DateTime } from 'luxon';

export function useLuxonNow() {
  const jsNow = useNow();

  const now = computed(() => DateTime.fromJSDate(jsNow.value));

  return now;
}
