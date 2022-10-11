<script setup>
import { ref } from "vue";

const props = defineProps({
  questionData: Object,
  questionSize: ref(),
  questionNumber: ref(0),
  questionCompleted: ref(),
});

function getQuestionBtnIndex(index) {
  console.log(index);
}
</script>

<template>

  <div class="container" v-if="props.questionSize.length > 0 && props.questionCompleted == false">
    <div class="content">
      <p class="progress"> {{ props.questionNumber }} / {{ props.questionSize.length }} </p>
      <img src="src/assets/placeholder-image.png" alt="placeholder-img" />
      <p>{{ props.questionData.question }}</p>
    </div>

    <div class="choices">
      <button
        v-for="(option, index) in props.questionData.options"
        :key="option"
        class="questionBtn"
        id="btnOne"
        @click="getQuestionBtnIndex(index)"
      >
        {{ option }}
      </button>
    </div>

    <div class="navigation">
      <button @click="$emit('previousQuestion')" class="prev">Previous</button>
      <button @click="$emit('nextQuestion')" class="next" v-if="props.questionNumber == props.questionSize.length"> finish </button>
      <button @click="$emit('nextQuestion')" class="next" v-else> next </button>
    </div>
  </div>
  <div v-else>
    <div class="result">
      <h2>You have finished all questions!</h2>
      <p>Your score is 0 / {{ questionSize.length }}</p>
    </div>
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
