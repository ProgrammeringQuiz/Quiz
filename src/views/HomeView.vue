<script setup>
import Question from "../components/Question.vue";
import quizData from "../../json/quizData.json"
import {ref} from "vue";

const data = quizData;
console.log(data);

const questionNumber = ref(0)

function nextQuestion(){
  if(questionNumber.value < (data.quizDemo.length-1))
  questionNumber.value++
}

function previousQuestion(){
  if(questionNumber.value > 0)
  questionNumber.value--
}
</script>

<template>
  <main>
      <Question @previousQuestion = 'previousQuestion'  @nextQuestion = 'nextQuestion' v-bind:questionData= "data.quizDemo[questionNumber]"
    />
  </main>

</template>
