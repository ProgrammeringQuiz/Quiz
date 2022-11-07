<script setup>
import { ref } from "vue";
import { useQuizStore } from "../stores/quiz";

const props = defineProps({
  questionData: Object,
  questionSize: ref(),
  questionNumber: ref(0),
  questionCompleted: ref(),
  imgLink: Object,
});
const quizStore = useQuizStore();
const answerStatus = ref();
const questionAnswered = ref(false);
const chosenAnswer = ref();

function checkAnswer(index) {
  chosenAnswer.value = index;
  console.log(index);
  quizStore.addAnswer(index);
  if (props.questionData.answer === index) {
    answerStatus.value = 2;
  } else {
    answerStatus.value = 1;
  }
  questionAnswered.value = true;
}

function nextQuestion() {
  quizStore.nextQuestion();
  if (quizStore.userAnswers[quizStore.questionNumber]) {
    chosenAnswer.value = quizStore.userAnswers[quizStore.questionNumber];
  } else {
    chosenAnswer.value = null;
    questionAnswered.value = false;
  }
}
function prevQuestion() {
  questionAnswered.value = true;
  quizStore.previousQuestion();
  chosenAnswer.value = quizStore.userAnswers[quizStore.questionNumber];
}
</script>

<template>
  <div
    class="container"
    v-if="props.questionSize.length > 0 && questionCompleted === false"
  >
    <div class="content">
      <p class="progress">
        {{ props.questionNumber }} / {{ props.questionSize.length }}
      </p>
      <img :src="props.imgLink" alt="placeholder-img" />
      <h1>{{ props.questionData.question }}</h1>
    </div>

    <div class="choices">
      <button
        v-for="(option, index) in props.questionData.options"
        :key="option.id"
        :disabled="questionAnswered"
        class="questionBtn"
        :id="'btn' + index"
        :class="{
          unClickable: questionAnswered,
          buttonHover: !questionAnswered,
          buttonFailed: chosenAnswer === index && answerStatus === 1,
          buttonSuccess: chosenAnswer === index && answerStatus === 2,
        }"
        @click="checkAnswer(index)"
      >
        {{ option }}
        <div v-if="questionAnswered">
          <img
            class="iconImg"
            v-if="
              chosenAnswer !== null &&
              chosenAnswer !== undefined &&
              index === props.questionData.answer
            "
            src="src/assets/correct.png"
          />
          <img
            class="iconImg"
            v-if="chosenAnswer === index && index !== props.questionData.answer"
            src="src/assets/cross.png"
          />
        </div>
      </button>
    </div>

    <div class="navigation">
      <button @click="prevQuestion" class="prev">Previous</button>
      <button :disabled="!questionAnswered" @click="nextQuestion" class="next">
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
.iconImg {
  width: 1.5em;
}

.container {
  font-family: Monospace, sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
}

.progress {
  display: flex;
  justify-content: center;
  color: #c84b31;
}

.content img {
  width: 60em;
  height: auto;
  align-self: center;
}

.content p {
  font-size: 1.2em;
  margin: 1em;
  padding: 0;
  text-align: center;
  color: #c84b31;
}

.content h1 {
  font-size: 2.2em;
  margin: 1em;
  padding: 0;
  text-align: center;
  color: #c84b31;
}

.choices {
  margin: 0.3em;
}

.questionBtn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  margin-top: 1em;
  width: 100%;
  border: 0;
  color: white;
  border-radius: 2em;
  cursor: pointer;
  background-color: #2d4263;
}

.buttonFailed {
  background-color: red;
}

.buttonSuccess {
  background-color: green;
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin: 2em;
}

.prev,
.next {
  padding: 1em;
  background-color: #2d4263;
  border: 0;
  color: white;
  border-radius: 0.5em;
  cursor: pointer;
}

.unClickable {
  cursor: auto;
}
.buttonHover:hover,
.prev:hover,
.next:hover {
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

@media screen and (max-width: 600px) {
  .content img {
    max-width: 30em;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 80%;
    margin: auto;
  }

  .content img {
    width: 40em;
    height: 25em;
  }

  .choices {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  }

  .questionBtn {
    width: 99%;
  }
}
</style>
