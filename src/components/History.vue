<script setup>
import history from "../../json/resultHistory.json";

const historyData = history.result;


</script>

<template>
  <div class="result">
  <h2>Best result:</h2>
  <p v-for="index in historyData.length " id="index" >
    {{ index }}. {{ historyData[index - 1].quizName }} - {{ historyData[index - 1].quizResult }}
  </p>
   </div>
</template>

<style scoped>
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

@media screen and (max-width: 1024px) {
.result {
  width: 85vw;
  height: 100vh;
  text-align: center;
}
}
</style>