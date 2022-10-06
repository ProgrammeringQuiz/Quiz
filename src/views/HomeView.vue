<script setup>
import Question from "../components/Question.vue";
import quizData from "../../json/quizData.json"

const data = quizData;
console.log(data);
</script>

<template>
  <main><Question v-bind:questionData= "data.quizDemo[0]" /></main>
</template>
