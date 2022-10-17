<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import quizData from "../../json/quizLanguage.json"

const id = useRoute().params.id
const quizLanguage = quizData.quizLanguage[id].quiz;

</script>

<template >
  <div class="quizOption">
    <div class="pageText">
      <h1>Choose the language you want to have a quiz on: </h1>
    </div>

    <div v-for="(quiz, index) in quizLanguage"
         :key="quiz.id"
         :id="'quiz' + index">
      <RouterLink class="quiz"  to="/quizDemo"> {{ quiz }} </RouterLink>
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

.quizOption {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  margin: 1em;

}

@media screen and (max-width: 1024px) {
  .pageText {
    font-size: 0.9em;
  }
}

@media screen and (min-width: 1024px) {
  .quiz {
    width: 50vw;
  }
}

@media screen and (max-width: 1024px) {
  .java, .javaScript, .cSharp {
    margin-top: 2.5em;
  }
}

</style>