<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import {ref, watch} from "vue";

let show = ref(false);
const authStore = useAuthStore();
const logoutButton = ref(false)

function BarText() {
  let text;
  if (useRoute().params.name == null) {
    text = useRoute().name;
  } else {
    text = useRoute().params.name;
  }
  return text;
}

watch(authStore, (newValue) => {
  logoutButton.value = newValue.logoutButton;
})
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <header>
    <div class="wrapper">
      <div class="hamburger">
        <h3 class="quiz">{{ BarText() }}</h3>
        <i class="fa fa-bars fa-3x" @click="show = !show"></i>
      </div>
      <Transition>
        <nav v-if="show" id="mobile">
          <RouterLink class="route" @click="show = !show" to="/">
            Home
          </RouterLink>
          <RouterLink class="route" @click="show = !show" to="/profile"
            >Profile
          </RouterLink>
          <RouterLink class="route" @click="show = !show" to="/History">
            History
          </RouterLink>
          <a class="route" v-if="logoutButton" @click="authStore.logout();show = !show;">
            Sign out
          </a>
        </nav>
      </Transition>

      <nav id="desktop">
        <RouterLink class="route" to="/">Home</RouterLink>
        <RouterLink class="route" to="/profile">Profile</RouterLink>
        <a class="route" v-if="logoutButton" @click="authStore.logout()">Sign out</a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* These are you used for hamburger menu transition, do NOT remove */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(30em);
  opacity: 0;
}
/* ------  */
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

.route {
  padding: 2em;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}

button {
  width: 10vw;
  background-color: #2d4263;
  color: #e3e3e3;
  padding: 32.5px 0;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #232747;
}

nav {
  background-color: #2d4263;
  position: absolute;
  width: 100%;
}
nav a {
  display: flex;
  padding: 0.8em;
  text-decoration: none;
  color: white;
  cursor: pointer
}
.route:hover {
  background-color: #232747;
}

#desktop {
  display: none;
}

@media screen and (min-width: 1024px) {
  button {
    width: 10%;
  }

  .wrapper {
    display: flex;
    justify-content: space-evenly;
  }
  .quiz {
    flex-grow: 1;
    margin: 1.5em 1em 1em 1em;
  }
  .hamburger i {
    display: none;
  }
  .hamburger {
    display: flex;
    width: 14vw;
  }

  #mobile {
    display: none;
  }

  #desktop {
    display: flex;
    position: relative;
    justify-content: space-evenly;
    flex-grow: 2;
    align-items: center;
    font-family: Monospace, sans-serif;
  }

  .route {
    flex-direction: row;
    box-shadow: none;
  }

  .route:hover {
    background-color: #232747;
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
