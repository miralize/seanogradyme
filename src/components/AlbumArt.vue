<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    default: '/@/assets/default-album-cover.png',
  },
  altText: {
    type: String,
    default: '',
  },
});

const isHovering = ref(false);
const imgContainer = ref<HTMLDivElement>(null);
const imgBounds = ref<DOMRect>(null);
const rx = ref(0);
const ry = ref(0);
const tz = ref(0);

function onMouseOver() {
  isHovering.value = true;
  imgBounds.value = imgContainer.value?.getBoundingClientRect();
}

function onMouseOut() {
  isHovering.value = false;
  imgBounds.value = null;
  rx.value = 0;
  ry.value = 0;
}

function onMouseMove(e: MouseEvent) {
  if (imgBounds.value) {
    const x = e.clientX - imgBounds.value.left;
    const y = e.clientY - imgBounds.value.top;

    const xc = imgBounds.value.width / 2;
    const yc = imgBounds.value.height / 2;

    const dx = x - xc;
    const dy = y - yc;

    rx.value = dy / -7;
    ry.value = dx / 7;
  }
}

function onMouseDown() {
  tz.value = -25;
}

function onMouseUp() {
  tz.value = 0;
}

const calculatedStyles = computed(() => ({
  '--rx-deg': `${rx.value}deg`,
  '--ry-deg': `${ry.value}deg`,
  '--rx-px': `${rx.value}px`,
  '--ry-px': `${-1 * ry.value}px`,
  '--tz': `${tz.value}px`,
}));
</script>

<template>
  <div
    ref="imgContainer"
    class="select-none"
    :style="calculatedStyles"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
    @mousemove="onMouseMove"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <div
      class="absolute top-0 left-0 -z-10 h-full w-full transform rounded-[var(--album-border-radius)] transition-transform duration-200 ease-in-out will-change-transform"
    ></div>
    <img
      class="w-full rounded-[var(--album-border-radius)]"
      :src="src"
      :alt="altText"
    />
  </div>
</template>

<style lang="scss" scoped>
.album-art {
  position: relative;
  user-select: none;
  transform: rotateX(var(--rx-deg)) rotateY(var(--ry-deg)) translateZ(var(--tz));
  transition: transform var(--d-very-fast);
  will-change: transform;
}

.album-art__backdrop {
  border-radius: var(--album-border-radius);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
  transition: transform var(--d-very-fast);
  transform: scale(0.9) translate3d(var(--ry-px), var(--rx-px), var(--tz));
  background: rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 16px 16px rgba(0, 0, 0, 0.17);
  z-index: -1;
}
</style>
