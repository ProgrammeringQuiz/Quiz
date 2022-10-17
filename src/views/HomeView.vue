<script setup>
import Question from "../components/Question.vue";
import {onMounted, ref} from "vue";
import {useQuizStore} from "../stores/quiz";

const quizStore = useQuizStore()

console.log(quizStore.questionNumber)

// const questionCompleted = ref(false);
// const questionNumber = ref(0);
// const getQuiz = ref()
//
// function nextQuestion() {
//   if (questionNumber.value < getQuiz.value.length - 1) {
//     questionNumber.value++;
//   } else {
//     questionCompleted.value = true;
//   }
// }
//
// function previousQuestion() {
//   if (questionNumber.value > 0) questionNumber.value--;
// }
//
onMounted(() => {
  fetch('http://localhost:8080/getQuestions').then(response => response.json()).then(data => {
    quizStore.setQuiz(data.quizDemo)
    console.log(data)

  })

} )
</script>

<template>
  <main v-if="quizStore.quiz" >
    <Question
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
