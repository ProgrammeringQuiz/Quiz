<script setup>
import Question from "../components/Question.vue";
import { RouterLink } from "vue-router";
import { useQuizStore } from "../stores/quiz";

const quizStore = useQuizStore();
</script>

<template>
  <main v-if="quizStore.quiz">
    <div class="result" v-if="quizStore.quizCompleted">
      <div><h1>
        You did it! Your score is {{ quizStore.totalScore }} /
        {{ quizStore.quiz.length }}
      </h1>
      </div>

      <RouterLink class="continue" to="/">Back to quiz</RouterLink>
    </div>
    <Question
      v-else
      @previousQuestion="previousQuestion"
      @nextQuestion="nextQuestion"
      v-bind:questionData="quizStore.quiz[quizStore.questionNumber]"
      v-bind:questionSize="quizStore.quiz"
      v-bind:questionNumber="quizStore.questionNumber + 1"
      v-bind:questionCompleted="quizStore.questionCompleted"
      :imgLink="quizStore.imgLink[quizStore.questionNumber]"
    />
  </main>

  <main v-else>loading...</main>
</template>

<style scoped>

.continue {
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  padding: 1em;
  margin-top: 1em;
  border: 5px;
  color: white;
  border-radius: 2em;
  cursor: pointer;
  background-color: #2d4263;
  text-decoration: none;
}

.continue:hover {
  background-color: #232747;
}

.result {
  max-width: 35em;
  margin: 5em auto auto;
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
</style>
