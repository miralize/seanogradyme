<template>
  <div class="container flex items-center">
    <div
      class="
        prose
        dark:text-white
        mx-auto
        flex flex-col
        gap-4
        text-2xl
        max-w-2xl
        text-green-300
      "
    >
      <h1 class="text-6xl font-semibold dark:text-white text-black">
        Hi, I'm Sean O'Grady
      </h1>

      <p>
        I’m a front end developer with over a 14 years of experience in
        developing user-friendly, fast, and robust software on the web.
      </p>

      <p>
        I am currently working as a frontend developer for Teamwork, a software
        company who are primarily located in Cork, Ireland.
      </p>

      <ul class="flex gap-4 mt-4">
        <li>
          <a
            href="https://twitter.com/miralize"
            class="
              rounded
              bg-teal-300
              text-black
              px-4
              py-3
              uppercase
              tracking-wide
              text-sm
            "
            target="_blank"
            rel="noopener"
          >
            Follow me on Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/miralize"
            class="
              rounded
              bg-teal-300
              text-black
              px-4
              py-3
              uppercase
              tracking-wide
              text-sm
            "
            target="_blank"
            rel="noopener"
          >
            Check out my Github
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/miralize"
            class="
              rounded
              bg-teal-300
              text-black
              px-4
              py-3
              uppercase
              tracking-wide
              text-sm
            "
            target="_blank"
            rel="noopener"
          >
            Look at my Dribbble
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Intro',
});
</script>

<style scoped></style>
