<script setup>
import languageData from "../../json/quizLanguage.json";
import QuizOption from "./QuizOptions.vue";
import { ref } from "vue";

const quizLanguage = languageData.quizLanguage[0].language;

let templateLanguage = ref(true);
let templateOptions = ref(false);
let languageIndex = ref(0);

function changePage(index) {
  templateLanguage.value = false;
  templateOptions.value = true;

  languageIndex.value = index;
}
</script>

<template>
  <div class="home" v-if="templateLanguage">
    <div class="pageText">
      <h1>Choose the language you want to have a quiz on:</h1>
    </div>
    <div class="content">
      <div
        @click="changePage(index)"
        class="quizLanguage"
        v-for="(language, index) in quizLanguage"
        :key="language.id"
        :id="'language' + index"
      >
        <h2>{{ language }}</h2>
      </div>
    </div>
  </div>
  <main v-if="templateOptions">
    <QuizOption v-bind:languageIndex="languageIndex + 1" />
  </main>
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
  cursor:pointer;
}


.quizLanguage:hover{
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
}

@media screen and (min-width: 1024px) {
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
