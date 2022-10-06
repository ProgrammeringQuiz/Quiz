<script setup>
const props = defineProps({
  questionData: Object,
})
console.log("props",props.questionData)

function warn(){
  alert("Function is called")

}
</script>
<template>
  <div class="container">
    <h2 class="quiz">Java Loops-Quiz</h2>
    <p class="progress">1/2</p>

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
.quiz {
  text-align: center;
  border: solid 1px;
}

.progress {
  display: flex;
  justify-content: flex-end;
  margin-right: 1.2em;
}

.content {
  max-width: 90%;
  margin: auto;
}

.content img {
  width: 100%;
}

.content p {
  margin: 1em;
  padding: 0;
  text-align: center;
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
}
.navigation {
  display: flex;
  justify-content: space-between;
  margin: 2em;
}

.prev,
.next {
  padding: 1em;
}
</style>
