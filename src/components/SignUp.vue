<script setup>
import { signUpRequest } from "@/apis/signUp";
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore.js";
import FileInput from "vue3-simple-file-input";

let authStore = useAuthStore();

const username = ref();
const password = ref();
const firstName = ref();
const lastName = ref();
const email = ref();
const profileImage = ref();

const signUp = async () => {
  console.log("profileImage: ", profileImage.value);
  await authStore.signUp({
    username: `${username.value}`,
    password: `${password.value}`,
    fName: `${firstName.value}`,
    lName: `${lastName.value}`,
    email: `${email.value}`,
    profileImage: `${profileImage.value.fileBlob.toString()}`,
  });
};
</script>

<template>
  <form action="" @submit.prevent="onSubmit">
    <h1>Sign up</h1>
    <label for="username"></label>
    <input
      class="userInput"
      type="text"
      placeholder="Username"
      id="username"
      v-model="username"
    />
    <label for="password"></label>
    <input
      class="userInput"
      type="password"
      placeholder="Password"
      id="password"
      v-model="password"
    />
    <label for="firstName"></label>
    <input
      class="userInput"
      type="text"
      placeholder="First Name"
      id="firstName"
      v-model="firstName"
    />
    <label for="lastName"></label>
    <input
      class="userInput"
      type="text"
      placeholder="Last Name"
      id="lastName"
      v-model="lastName"
    />
    <label for="email"></label>
    <input
      class="userInput"
      type="text"
      placeholder="Email"
      id="email"
      v-model="email"
    />

    <label class="fileLabel">
      Choose a file:
      <input type="file" name="avatar" />
    </label>

    <button @click="signUp()">Confirm</button>
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
  justify-content: center;
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

.userInput {
  background-color: rgba(255, 255, 255, 0.07);
}

input {
  display: block;
  height: 50px;
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
input[type="file"] {
  display: block;
  margin: 0;
  padding: 0;
}
.fileLabel {
  margin-top: 0.5em;
  padding: 0.5em;
  background-color: rgba(255, 255, 255, 0.07);
  cursor: pointer;
}
</style>
