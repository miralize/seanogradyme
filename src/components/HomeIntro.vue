<template>
  <div class="container flex items-center">
    <div
      class="prose mx-auto flex max-w-2xl flex-col gap-4 text-lg font-light text-white"
    >
      <h1 class="text-6xl font-semibold text-white">Hi, I'm Sean O'Grady</h1>

      <p>
        I’m a front end developer with over
        {{ years }} years of experience in developing user-friendly, fast, and
        robust software on the web.
      </p>

      <p>
        I am currently working as a senior frontend developer for Teamwork, a
        software company who are primarily located in Cork, Ireland.
      </p>

      <ul class="mt-4 flex gap-4">
        <li>
          <a
            href="https://twitter.com/miralize"
            class="rounded bg-pink-600 px-4 py-3 text-xs uppercase tracking-wider text-white"
            target="_blank"
            rel="noopener"
          >
            Follow me on Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/miralize"
            class="rounded bg-pink-600 px-4 py-3 text-xs uppercase tracking-wider text-white"
            target="_blank"
            rel="noopener"
          >
            Check out my Github
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/miralize"
            class="rounded bg-pink-600 px-4 py-3 text-xs uppercase tracking-wider text-white"
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

<script setup>
import { DateTime } from 'luxon';

const started = DateTime.fromISO('2006-09-01');
const y = started.diffNow('years').negate().years;
const years = Math.floor(y);
</script>
