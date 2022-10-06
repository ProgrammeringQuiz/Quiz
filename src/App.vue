<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
let show = ref();

function resize() {
  show.value = window.innerWidth >= 1024;
}
resize();
window.addEventListener("resize", resize);
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <header>
    <div class="wrapper">
      <div class="hamburger">
        <h3 class="quiz">Java Loops-Quiz</h3>
        <i class="fa fa-bars fa-3x" @click="show = !show"></i>
      </div>
      <nav v-if="show">
        <div class="menuItem">
          <RouterLink class="test" to="/">Quiz</RouterLink>
        </div>
        <div class="menuItem">
          <RouterLink class="test" to="/about">Profile</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  max-width: 200em;
  margin: auto;
}
.hamburger {
  display: flex;
}
.hamburger i {
  padding: 0.14em 0.2em 0 0.2em;
  background-color: #2d4263;
}
.quiz {
  font-family: Monospace, sans-serif;
  flex-grow: 2;
  text-align: center;
  color: white;
}

nav {
  background-color: #2d4263;
}

.menuItem {
  display: flex;
}

nav a {
  text-decoration: none;
  color: white;
  margin: 0.8em;
}
.menuItem:hover {
  background-color: #232747;
}

@media screen and (min-width: 1024px) {
  .wrapper {
    display: flex;
    justify-content: space-evenly;
  }
  .quiz {
    flex-grow: 1;
    margin: 1em;
  }
  .hamburger i {
    display: none;
  }
  nav {
    display: flex;
    justify-content: space-evenly;
    flex-grow: 2;
    align-items: center;
    font-family: Monospace, sans-serif;
  }

  .menuItem {
    flex-direction: row;
  }

  .menuItem:hover {
    background-color: #232747;
    border-radius: 0.5em;
  }
}
</style>

<style>
body {
  background-color: #28282b;
  padding: 0;
  margin: 0;
}
@media screen and (min-width: 1024px) {
  body {
    max-width: 100em;
    margin: auto;
  }
}
</style>
