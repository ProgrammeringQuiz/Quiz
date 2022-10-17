<script setup>
import { RouterLink, RouterView } from "vue-router";
import languageData from "../../json/quizLanguage.json"

const quizLanguage = languageData.quizLanguage[0].language;

</script>

<template >
  <div class="home">
    <div class="pageText">
      <h1>Choose the language you want to have a quiz on: </h1>
    </div>

    <div v-for="(language, index) in quizLanguage"
         :key="language.id"
         :id="'language' + index">
            <RouterLink  class="quizLanguage"  :to="{name:`quizOptions`, params: {name:language, id:index + 1}}">
              {{ language }}
            </RouterLink>
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

.quizLanguage {
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

.home {
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
  .quizLanguage {
    width: 50vw;
  }
}

@media screen and (max-width: 1024px) {
  .java, .javaScript, .cSharp {
    margin-top: 2.5em;
  }
}

</style>