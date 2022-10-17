<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import quizData from "../../json/quizLanguage.json";

const id = useRoute().params.id;
const quizLanguage = quizData.quizLanguage[id].quiz;
</script>

<template>
  <div class="quizOption">
    <div class="pageText">
      <h1>Choose your quiz:</h1>
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

.content{
  display: flex;
  flex-direction: column;
}

.quizLanguage {
  font-size: 2em;
  width: 50vw;
  text-decoration: none;
  margin: 1em auto auto auto;
  background-color: #2d4263;
  border-radius: 0.5em;
  padding: 1.5em;
  text-align: center;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  cursor: pointer;
}

.quizLanguage:hover {
  background-color: #232747;
}

.quiz {
  text-decoration: none;
  color: white;
}

h2 {
  font-size: 2.2em;
}

.quizOption {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  margin: 1em;
}



@media screen and (min-width: 1024px) {
  .pageText {
    margin-top: 2em;
    font-size: 0.9em;
  }

  .content {
    max-width: 60em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .quizLanguage {
    color: white;
    margin: 0.5em;
    padding: 1em;
    width: 7em;
  }
}
</style>
