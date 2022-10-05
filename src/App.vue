<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Quiz</RouterLink>
        <RouterLink to="/about">Profile</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
  padding: 1em;
}
</style>

<style>
body {
  background-color: #28282b;
}
</style>
