<script setup>
import Question from "../components/Question.vue";
import {onMounted} from "vue";
import {useQuizStore} from "../stores/quiz";

const quizStore = useQuizStore()

onMounted(() => {
  fetch('http://localhost:8080/getQuestions').then(response => response.json()).then(data => {
    quizStore.setQuiz(data.quizDemo)
    console.log(data)

  })

} )
</script>

<template>
  <main v-if="quizStore.quiz" >
    <h1 v-if="quizStore.quizCompleted">You did it! Your score is {{quizStore.totalScore}} / {{quizStore.quiz.length}}</h1>
    <Question
        v-else
      @previousQuestion="previousQuestion"
      @nextQuestion="nextQuestion"
      v-bind:questionData="quizStore.quiz[quizStore.questionNumber]"
      v-bind:questionSize="quizStore.quiz"
      v-bind:questionNumber="quizStore.questionNumber + 1"
      v-bind:questionCompleted="quizStore.questionCompleted"
    />
  </main>

  <main v-else>
    loading...
  </main>
</template>
