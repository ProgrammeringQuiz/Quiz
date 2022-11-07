<script setup>
import {signUpRequest} from "@/apis/signUp";
import {ref} from "vue";
import {useAuthStore} from "@/stores/authStore.js";
import FileInput from 'vue3-simple-file-input'

let authStore = useAuthStore();

const username = ref();
const password = ref();
const firstName = ref();
const lastName = ref();
const email = ref();
const profileImage = ref();

const signUp = async () => {
  console.log("profileImage: ", profileImage.value)
  await authStore.signUp({
    username: `${username.value}`,
    password: `${password.value}`,
    fName: `${firstName.value}`,
    lName: `${lastName.value}`,
    email: `${email.value}`,
    profileImage: `${profileImage.value.fileBlob.toString()}`
  })

}

</script>

<template>
  <form action="" @submit.prevent="onSubmit">
    <h1>Sign up</h1>
    <label for="username"></label>
    <input type="text" placeholder="Username" id="username" v-model="username"/>
    <label for="password"></label>
    <input type="password" placeholder="Password" id="password" v-model="password"/>
    <label for="firstName"></label>
    <input type="text" placeholder="First Name" id="firstName" v-model="firstName"/>
    <label for="lastName"></label>
    <input type="text" placeholder="Last Name" id="lastName" v-model="lastName"/>
    <label for="email"></label>
    <input type="text" placeholder="Email" id="email" v-model="email"/>
    <label for="file"></label>
    <file-input v-model="profileImage" />

    <button @click="signUp()">Confirm</button>




  </form>
</template>

<style scoped>

form {
  height: 500px;
  width: 500px;
  background-color: #2d4263;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
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
  width: 96%;
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