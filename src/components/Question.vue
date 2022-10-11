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
const currentIndex = ref(0);
const reactiveColor = ref("#2d4263");

function clearStorage(x) {
  if (x) {
    localStorage.clear();
  }
}

function checkQuestion(x) {
  if (!x) {
    isQuestionAnswered(props.questionNumber);
  }
}

function getQuestionBtnIndex(index) {
  if (localStorage.getItem(props.questionNumber.toString()) !== null) {
    index = localStorage.getItem(props.questionNumber).toString();
    console.log(index);
    currentIndex.value = index;
  }
  if (props.questionData.answer === parseInt(index)) {
    value.value++;
    document.querySelector("#btn" + index.toString()).style.backgroundColor =
      "#48A14D";
  } else {
    document.querySelector("#btn" + index.toString()).style.backgroundColor =
      "#B33F40";
    document.querySelector(
      "#btn" + props.questionData.answer
    ).style.backgroundColor = "#48A14D";
  }
  isDisabled.value = true;
  localStorage.setItem(String(props.questionNumber), String(index));
}

function isQuestionAnswered(x) {
  let local = localStorage.getItem(x.toString());
  if (local !== null) {
    isDisabled.value = true;
    if (parseInt(local) === props.questionData.answer) {
      document.querySelector("#btn" + local).style.backgroundColor = "#48A14D";
    } else {
      document.querySelector("#btn" + local).style.backgroundColor = "#B33F40";
      document.querySelector(
        "#btn" + props.questionData.answer
      ).style.backgroundColor = "#48A14D";
    }
  }
}

function nextQuestion() {
  isDisabled.value = false;
  setTimeout(function () {
    isQuestionAnswered(props.questionNumber);
  }, 1);
  emit("nextQuestion");
}
function prevQuestion() {
  isDisabled.value = false;
  setTimeout(function () {
    isQuestionAnswered(props.questionNumber);
  }, 1);
  emit("previousQuestion");
}
</script>

<template>
  <div
    class="container"
    v-if="props.questionSize.length > 0 && props.questionCompleted === false"
    :ref="() => checkQuestion(props.questionCompleted)"
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
        :id="'btn' + index"
        :style="{ backgroundColor: reactiveColor }"
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
  <div v-else :ref="() => clearStorage(props.questionCompleted)">
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
