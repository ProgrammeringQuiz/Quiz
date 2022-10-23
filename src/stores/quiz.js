import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";

export const useQuizStore = defineStore("quiz", () => {
  const questionCompleted = ref(false);
  const questionNumber = ref(0);
  const quiz = ref([]);
  const quizCompleted = ref(false);
  const userAnswers = ref([]);

  const totalScore = computed(() => {
    let score = 0;
    quiz.value.forEach((question, index) => {
      if (question.answer === userAnswers.value[index]) {
        score++;
      }
    });
    return score;
  });

  function addAnswer(answer) {
    userAnswers.value.push(answer);
  }

  function nextQuestion() {
    if (questionNumber.value < quiz.value.length - 1) {
      questionNumber.value++;
    } else {
      quizCompleted.value = true;
    }
  }
  function setQuiz(quizData) {
    quiz.value = quizData;
  }

  function previousQuestion() {
    if (questionNumber.value > 0) questionNumber.value--;
  }

  onMounted(() => {
    fetch("http://localhost:8080/api/quiz")
      .then((response) => response.json())
      .then((data) => {
        quiz.value = data.data;
        console.log(data);
      });
  });

  return {
    questionCompleted,
    questionNumber,
    nextQuestion,
    previousQuestion,
    quiz,
    setQuiz,
    quizCompleted,
    addAnswer,
    userAnswers,
    totalScore,
  };
});
