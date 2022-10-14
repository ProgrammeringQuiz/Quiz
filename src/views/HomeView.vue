<script setup>
import Question from "../components/Question.vue";
import {onMounted, ref} from "vue";

const questionCompleted = ref(false);
const questionNumber = ref(0);
const getQuiz = ref()



function nextQuestion() {
  if (questionNumber.value < getQuiz.value.length - 1) {
    questionNumber.value++;
  } else {
    questionCompleted.value = true;
  }
}

function previousQuestion() {
  if (questionNumber.value > 0) questionNumber.value--;
}

onMounted(() => {
  fetch('http://localhost:8080/getQuestions').then(response => response.json()).then(data => {
    getQuiz.value = data.quizDemo;
    console.log(data)

  })

} )
</script>

<template>
  <main v-if="getQuiz" >
    <Question
      @previousQuestion="previousQuestion"
      @nextQuestion="nextQuestion"
      v-bind:questionData="getQuiz[questionNumber]"
      v-bind:questionSize="getQuiz"
      v-bind:questionNumber="questionNumber + 1"
      v-bind:questionCompleted="questionCompleted"
    />
  </main>

  <main v-else>
    loading...
  </main>
</template>
