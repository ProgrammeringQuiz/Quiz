<script setup>
import { ref } from "vue";

const emit = defineEmits(["nextQuestion", "previousQuestion"]);

const props = defineProps({
  questionData: Object,
  questionSize: ref(),
  questionNumber: ref(0),
  questionCompleted: ref(),
});
let value = ref(0);
let isDisabled = ref(false);
const testIndex = ref(0);

function getQuestionBtnIndex(index) {
  testIndex.value = index;
  if (props.questionData.answer === index) {
    value.value++;
    document.getElementById(index.toString()).style.backgroundColor = 'green';
    isDisabled.value = true;
  } else {
    document.getElementById(index.toString()).style.backgroundColor = 'red';
    isDisabled.value = true;
  }
}

function nextQuestion() {
  console.log(props.questionSize.length);
  document.getElementById(testIndex.value).style.backgroundColor = "#2d4263";
  isDisabled.value = false;
  emit("nextQuestion");
}
function prevQuestion() {
  emit("previousQuestion");
}
</script>

<template>
  <div
    class="container"
    v-if="props.questionSize.length > 0 && props.questionCompleted === false"
  >
    <div class="content">
      <p class="progress">
        {{ props.questionNumber }} / {{ props.questionSize.length }}
      </p>
      <img src="src/assets/placeholder-image.png" alt="placeholder-img" />
      <p>{{ props.questionData.question }}</p>
    </div>

    <div class="choices">
      <button
        v-for="(option, index) in props.questionData.options"
        :key="option.id"
        :disabled="isDisabled"
        class="questionBtn"
        :id="index"
        @click="getQuestionBtnIndex(index)"
      >
        {{ option }}
      </button>
    </div>

    <div class="navigation">
      <button @click="prevQuestion" class="prev">Previous</button>
      <button @click="nextQuestion" class="next">Next</button>
    </div>
  </div>
  <div v-else>
    <h2>You have finished all questions!</h2>
    <p>Your score is {{ value }} / {{ questionSize.length }}</p>
  </div>
</template>

<style scoped>
.container {
  font-family: Monospace, sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
}

.progress {
  display: flex;
  justify-content: flex-end;
  color: #c84b31;
}

.content img {
  width: 33em;
  align-self: center;
}

.content p {
  font-size: 1.2em;
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
  flex-direction: column;
  padding: 1em;
  margin-top: 1em;
  width: 100%;
  background-color: #2d4263;
  border: 0;
  color: white;
  border-radius: 2em;
  cursor: pointer;
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

.questionBtn:hover,
.prev:hover,
.next:hover {
  background-color: #232747;
}

@media screen and (min-width: 600px) {
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
    max-width: 50%;
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
