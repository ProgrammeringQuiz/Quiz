<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore.js";

let authStore = useAuthStore();

const username = ref();
const password = ref();
const errMsg = ref();

const signIn = async () => {
  await authStore.login({
    username: `${username.value}`,
    password: `${password.value}`,
  });
};
</script>

<template>
  <form action="" @submit.prevent="onSubmit">
    <h1>Welcome</h1>
    <label for="username"></label>
    <input
      type="text"
      placeholder="Username"
      id="username"
      v-model="username"
    />
    <label for="password"></label>
    <input
      type="password"
      placeholder="Password"
      id="password"
      v-model="password"
    />
    <p v-if="errMsg">{{ errMsg }}</p>
    <button @click="signIn">Sign In</button>
    <span>Need an account? </span>
    <RouterLink class="route" to="/signup">Sign up</RouterLink>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background-color: #2d4263;
  max-width: 20em;
  margin: 10em auto;
  border-radius: 0.625em;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 3.125em 2.1875em;
}

form * {
  font-family: sans-serif;
  color: #ffffff;
  outline: none;
  border: none;
}

form h1 {
  font-size: 30px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
}

label {
  display: block;
  font-size: 16px;
  font-weight: 500;
}

input {
  display: block;
  height: 50px;
  width: 93%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

::placeholder {
  color: rgb(255, 255, 255);
  font-size: 1rem;
}

button {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  color: #e3e3e3;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #232747;
}
</style>
