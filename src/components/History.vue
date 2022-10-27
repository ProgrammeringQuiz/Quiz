<script setup>
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
  <div class="result">
    <h2>Best result:</h2>
    <p v-for="index in userStore.user[1].quizHistory.length" id="index">
      {{ index }}. {{ userStore.user[1].quizHistory[index - 1].quizName }} -
      {{ userStore.user[1].quizHistory[index - 1].score }}
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
