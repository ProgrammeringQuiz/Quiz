import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";

export const useQuizStore = defineStore("quiz", () => {
  const questionCompleted = ref(false);
  const questionNumber = ref(0);
  const quiz = ref([]);
  const quizCompleted = ref(false);
  const userAnswers = ref([]);
  let questionLink = ref("loading...");
  const localhost = "http://localhost:8080/";
  let imgLink = ref([]);
  const totalScore = computed(() => {
    let score = 0;
    quiz.value.forEach((question, index) => {
      if (question.answer === userAnswers.value[index]) {
        score++;
      }
    });
    return score;
  });

  function addImageLink(){
    quiz.value.forEach((question, index) => {
      questionLink.value = question.questionImg;
      imgLink.value[index] = localhost + questionLink.value;
      return imgLink;
    });
    console.log(imgLink);
  }
  function addAnswer(answer) {
    userAnswers.value.push(answer);
  }

  function nextQuestion() {
    if (questionNumber.value < quiz.value.length - 1) {
      questionNumber.value++;
    } else {
      quizCompleted.value = true;
      const userId = "635a10fb3886e20608df40f9";

      const updateUserQuizHistory = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quizHistory: [
            {
              quizName: `${quiz.value[0].title}`,
              score: `${totalScore.value}`,
              scoreOf: `${quiz.value.length}`,
            },
          ],
        }),
      };
      fetch(`http://localhost:8080/api/user/${userId}`, updateUserQuizHistory)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }
  function setQuiz(quizData) {
    quiz.value = quizData;
  }

  function previousQuestion() {
    if (questionNumber.value > 0) questionNumber.value--;
  }

  onMounted(() => {
    fetch("http://localhost:8080/api/java/variable")
      .then((response) => response.json())
      .then((data) => {
        quiz.value = data.data;
        addImageLink();
        console.log(data);
      })
      .catch((err) => console.log(err));
  });


  return {
    questionCompleted,
    questionNumber,
    nextQuestion,
    previousQuestion,
    addImageLink,
    imgLink,
    quiz,
    setQuiz,
    quizCompleted,
    addAnswer,
    userAnswers,
    totalScore,
  };
});
