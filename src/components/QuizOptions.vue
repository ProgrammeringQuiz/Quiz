<script setup>
import languageData from "../../json/quizLanguage.json";
import { ref } from "vue";

const props = defineProps({
  languageIndex: ref(1),
});

const quizData = languageData.quizLanguage[1].quiz;
</script>

<template>
  <div class="home">
    <div class="pageText">
      <h1>Choose your quiz:</h1>
    </div>
    <div class="content">
      <div
          class="quizLanguage"
          v-for="(quiz, index) in quizData"
          :key="quiz.id"
          :id="'quiz' + index"
      >
        <h2>{{ quiz }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pageText {
  font-size: 1.2em;
  margin: 1em;
  padding: 0;
  text-align: center;
  color: #c84b31;
}

.quizLanguage {
  max-width: 35em;
  margin: 5em auto auto auto;
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
