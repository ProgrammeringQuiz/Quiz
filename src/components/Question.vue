<script setup>
import {ref} from "vue"

const props = defineProps({
  questionData: Object,
  questionSize: ref(),
  questionNumber: ref(0),
})

</script>

<template>
  <div class="container" v-if="props.questionSize.length > 0">
    <p class="progress"> {{ props.questionNumber }} / {{ props.questionSize.length }} </p>

    <div class="content">
      <img src="src/assets/placeholder-image.png" alt="placeholder-img" />
      <p>{{props.questionData.question}}</p>
    </div>
    <button v-for = "option in props.questionData.options" class="questionBtn"  id="btnOne">{{option}}</button>
    <div class="navigation">
      <button @click="$emit('previousQuestion')" class="prev">Previous</button> <button @click="$emit('nextQuestion')" class="next">Next</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Monospace, sans-serif;
  margin: 0.3em;
}

.progress {
  display: flex;
  justify-content: flex-end;
  margin-right: 1.2em;
  color: #c84b31;
}

.content {
  max-width: 90%;
  margin: auto;
}

.content img {
  width: 100%;
}

.content p {
  font-size: 1.2em;
  margin: 1em;
  padding: 0;
  text-align: center;
  color: #c84b31;
}

#btnOne {
  margin-top: 2em;
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
</style>
