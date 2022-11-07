import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";

export const useQuizStore = defineStore("quiz", () => {
  let questionCompleted = ref(false);
  let questionNumber = ref(0);
  let quiz = ref([]);
  let quizCompleted = ref(false);
  let userAnswers = ref([]);
  let questionLink = ref("loading...");
  let localhost = "http://localhost:8080/";
  let imgLink = ref([]);
  let totalScore = computed(() => {
    let score = 0;
    quiz.value.forEach((question, index) => {
      if (question.answer === userAnswers.value[index]) {
        score++;
      }
    });
    return score;
  });

  function reset() {
    questionCompleted.value = false;
    questionNumber.value = 0;
    quizCompleted.value = false;
    userAnswers.value = [];
    console.log("Reset");
  }

  const javaVarArr = ref([]);
  const javaClassArr = ref([]);
  const javaArraysArr = ref([]);
  const javaLoopsArr = ref([]);

  const jsVarArr = ref([]);
  const jsFuncArr = ref([]);
  const jsLoopsArr = ref([]);
  const jsArraysArr = ref([]);

  function addImageLink(array) {
    array.value.forEach((question, index) => {
      questionLink.value = question.questionImg;
      imgLink.value[index] = localhost + questionLink.value;
      return imgLink;
    });
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
    if (questionNumber.value > 0){
      questionNumber.value--;

    }

  }

  onMounted(() => {
    fetch("http://localhost:8080/api/java/variable")
      .then((response) => response.json())
      .then((data) => {
        javaVarArr.value = data.data;
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:8080/api/java/class")
      .then((response) => response.json())
      .then((data) => {
        javaClassArr.value = data.data;
      })
      .catch((err) => console.log(err));
    fetch("http://localhost:8080/api/java/loops")
      .then((response) => response.json())
      .then((data) => {
        javaLoopsArr.value = data.data;
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:8080/api/java/arrays")
      .then((response) => response.json())
      .then((data) => {
        javaArraysArr.value = data.data;
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:8080/api/js/variable")
      .then((response) => response.json())
      .then((data) => {
        jsVarArr.value = data.data;
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:8080/api/js/function")
      .then((response) => response.json())
      .then((data) => {
        jsFuncArr.value = data.data;
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:8080/api/js/arrays")
      .then((response) => response.json())
      .then((data) => {
        jsArraysArr.value = data.data;
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:8080/api/js/loops")
      .then((response) => response.json())
      .then((data) => {
        jsLoopsArr.value = data.data;
      })
      .catch((err) => console.log(err));
  });

  function selectQuiz(selectedQuiz) {
    quiz.value = [];
    reset();
    switch (selectedQuiz) {
      case "Java-Variables":
        addImageLink(javaVarArr);
        quiz.value = javaVarArr.value;
        break;
      case "Java-Classes":
        addImageLink(javaClassArr);
        quiz.value = javaClassArr.value;
        break;
      case "Java-Loops":
        addImageLink(javaLoopsArr);
        quiz.value = javaLoopsArr.value;
        break;
      case "Java-Arrays":
        addImageLink(javaLoopsArr);
        quiz.value = javaArraysArr.value;
        break;

      case "Js-Variable":
        addImageLink(jsVarArr);
        quiz.value = jsVarArr.value;
        break;
      case "Js-Function":
        addImageLink(jsFuncArr);
        quiz.value = jsFuncArr.value;
        break;
      case "Js-Loops":
        addImageLink(jsLoopsArr);
        quiz.value = jsLoopsArr.value;
        break;
      case "Js-Array":
        addImageLink(jsArraysArr);
        quiz.value = jsArraysArr.value;
        break;
    }
  }

  return {
    questionCompleted,
    questionNumber,
    nextQuestion,
    previousQuestion,
    selectQuiz,
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
