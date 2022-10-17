<script setup>
import { RouterLink, RouterView } from "vue-router";
import languageData from "../../json/quizLanguage.json";

const quizLanguage = languageData.quizLanguage[0].language;
</script>

<template>
  <div class="home">
    <div class="pageText">
      <h1>Choose the language you want to have a quiz on:</h1>
    </div>
    <div class="content">
      <div
          class="quizLanguage"
        v-for="(language, index) in quizLanguage"
        :key="language.id"
        :id="'language' + index"
      >
        <RouterLink
          class="languageText"
          :to="{
            name: `quizOptions`,
            params: { name: language, id: index + 1 },
          }"
        >
          {{ language }}
        </RouterLink>
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

.languageText{
  text-decoration: none;
  color:white;
}

.home {
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
