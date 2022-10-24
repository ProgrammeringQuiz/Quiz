<script setup>
import history from "../../json/resultHistory.json";
import users from "../../json/users.json";

const historyData = history.result;
const user = users.users[1]


</script>


<template>
  <div class="container">
    <div class="userBox">
      <img src="src/assets/placeholder-image.png" alt="placeholder-img" />
      <h1>First Name: {{ user.firstName }}</h1>
      <h1>Last Name: {{ user.lastName }}</h1>
      <h1>Email: {{ user.email }}</h1>
      <h1>Username: {{ user.username }}</h1>
    </div>
    <div class="imageBox">

      <div class="history">

        <div class="result">
          <h2>Best result:</h2>
          <p v-for="index in historyData.length " id="index" >
            {{ index }}. {{ historyData[index - 1].quizName }} - {{ historyData[index - 1].quizResult }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>



.history {
  margin: 2em;
  justify-items: center;
}

.result {
  color: white;
  font-size: 2em;
  width: 24.3vw;
  text-decoration: none;
  margin: 1em auto auto auto;
  background-color: #2d4263;
  padding: 1.5em;
  text-align: center;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}

.result h2 {
  font-size: 1em;
  margin-top: 0;
  padding-top: 0;
}

.result p {
  text-align: left;
  font-size: 0.8em;

}

.userBox h1 {
  margin-bottom: 2em;
}

.userBox {
  font-size: 1.2em;
  padding: 0;
  margin-top: 2em;
  color: #c84b31;
}

.userBox img {
  width: 20vw;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>