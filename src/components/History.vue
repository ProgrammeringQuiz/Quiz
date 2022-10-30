<script setup>
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

let userStore;
let attempt = 0;
const history = ref([]);
function getStore() {
  try {
    userStore = useUserStore();

    history.value = Array.from(userStore.user[1].quizHistory);
  } catch (e) {
    if (attempt > 10) {
      throw new Error("Something went wrong");
    } else {
      console.log(attempt);
      attempt++;
      setTimeout(() => {
        getStore();
      }, 500);
    }
  }
}
getStore();
</script>

<template>
  <div class="result">
    <h2>Best result:</h2>
    <p v-for="index in history.length" id="index">
      {{ index }}. {{ history[index - 1].quizName }} -
      {{ history[index - 1].score }} / {{ history[index - 1].scoreOf }}
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
