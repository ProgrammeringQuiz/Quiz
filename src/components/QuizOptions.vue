<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import quizData from "../../json/quizLanguage.json";

const id = useRoute().params.id;
const quizLanguage = quizData.quizLanguage[id].quiz;
</script>

<template>
  <div class="quizOption">
    <div class="pageText">
      <h1>Choose the language you want to have a quiz on:</h1>
    </div>
    <div class="content">
      <div
          class="quizLanguage"
        v-for="(quiz, index) in quizLanguage"
        :key="quiz.id"
        :id="'quiz' + index"
      >
        <RouterLink class="quiz" to="/quizDemo"> {{ quiz }} </RouterLink>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
.pageText {
  font-size: 1.2em;
  margin: 1em;
  padding: 0;
  text-align: center;
  color: #c84b31;
}

.quiz {
  font-size: 2.2em;
  width: 80vw;
  height: 10vh;
  margin-top: 2em;
  display: flex;
  background-color: #2d4263;
  border-radius: 0.5em;
  padding: 0.5em 0.5em 1em 0.5em;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}

.quizLanguage:hover {
  background-color: #232747;
}

h2 {
  font-size: 2.2em;
}

.home {
  margin: 1em;
}

@media screen and (min-width: 1024px) {
  .pageText {
    margin-top: 6em;
    font-size: 0.9em;
  }

  .content {
    max-width: 60em;
    margin: 5em auto auto auto;
    display: flex;
    flex-wrap: wrap;
  }

  .quizLanguage {
    color: white;
    margin: 1em;
    padding: 1em;
    width: 15em;
  }
}
</style>
