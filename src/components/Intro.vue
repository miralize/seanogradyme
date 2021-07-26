<template>
  <div class="prose dark:text-white">
    <h1 class="text-white">Hi, I'm Sean O'Grady</h1>

    <p class="text-text">
      I’m a front end developer with over a 14 years of experience in developing
      user-friendly, fast, and robust software on the web.
    </p>

    <p>
      I am currently a developer for Teamwork, a fantastic software company
      located in Cork, Ireland.
    </p>

    <ul>
      <li><a href="https://twitter.com/miralize">Follow me on Twitter</a></li>
      <li>
        <a href="https://github.com/miralize">Spot the bugs I made on Github</a>
      </li>
      <li>
        <a href="https://dribbble.com/miralize">
          Judge my design sensibilities on Dribbble
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Intro',
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
