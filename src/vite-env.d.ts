/// <reference types="vite/client" />

declare module '*.svg?component' {
  import { DefineComponent } from 'vue';

  const src: DefineComponent;
  export default src;
}
