
import {defineStore} from "pinia";
import {onMounted, ref} from "vue";

export const useQuizStore = defineStore('quiz', () => {
    const questionCompleted = ref(false)
    const questionNumber = ref(0)
    const quiz = ref()

    function nextQuestion() {
        if (questionNumber.value < quiz.value.length - 1) {
            questionNumber.value++
        } else {
            questionCompleted.value = true
        }
    }
    function setQuiz(quizData){

        quiz.value = quizData

    }

    function previousQuestion() {
        if (questionNumber.value > 0) questionNumber.value--
    }

    onMounted(() => {
        fetch('http://localhost:8080/getQuestions').then(response => response.json()).then(data => {
            quiz.value = data.quizDemo
            console.log(data)

        })

    } )

    return {questionCompleted, questionNumber, nextQuestion,previousQuestion, quiz, setQuiz}

})