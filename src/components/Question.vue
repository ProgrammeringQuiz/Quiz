<script setup></script>
<template>
  <div class="container">
    <h2 class="quiz">Java Loops-Quiz</h2>
    <p class="progress">1/2</p>
    <p class="score">Score:1</p>

    <div class="content">
      <img src="src/assets/placeholder-image.png" alt="placeholder-img" />
      <p>what is x?</p>
    </div>
    <button class="questionBtn" id="btnOne">answer#1</button>
    <button class="questionBtn" id="btnTwo">answer#2</button>
    <button class="questionBtn" id="btnThree">answer#3</button>
    <button class="questionBtn" id="btnFour">answer#4</button>

    <div class="navigation">
      <button class="prev">Previous</button> <button class="next">Next</button>
    </div>
  </div>
</template>

<style scoped>
.quiz {
  text-align: center;
  border: solid 1px;
}

.progress {
  text-align: center;
}
.score {
  display: flex;
  justify-content: flex-end;
  margin-right: 1em;
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
.navigation{
  display: flex;
  justify-content: space-between;
  margin: 2em;
}
</style>
