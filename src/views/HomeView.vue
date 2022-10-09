<script setup>
import Question from "../components/Question.vue";
import { ref} from "vue";
import userQuiz from "../composables/quizDemo";

const {  getQuiz } = userQuiz();

const questionNumber = ref(0)

function nextQuestion(){
  if(questionNumber.value < getQuiz.value.length -1 )
  questionNumber.value++
}

function previousQuestion(){
  if(questionNumber.value > 0)
  questionNumber.value--
}

</script>

<template>
  <main>
      <Question @previousQuestion = 'previousQuestion'  
                @nextQuestion = 'nextQuestion' 
                v-bind:questionData="getQuiz[questionNumber]"
                v-bind:questionSize= "getQuiz"
                v-bind:questionNumber= "questionNumber + 1"
    />
  </main>

</template>
