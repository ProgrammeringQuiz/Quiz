<script setup>

</script>

<template>
  <form action="">
    <h1>Sign up</h1>
    <label for="firstName"></label>
    <input type="text" placeholder="First Name" id="firstName" />
    <label for="lastName"></label>
    <input type="text" placeholder="Last Name" id="lastName" />
    <label for="email"></label>
    <input type="text" placeholder="Email" id="email" />
    <label for="username"></label>
    <input type="text" placeholder="Username" id="username" />

    <label for="password"></label>
    <input type="password" placeholder="Password" id="password" />
    <button>Confirm</button>
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