import { ref, onMounted } from "vue";
import { fetchQuiz, storeQuiz } from "../apis/quiz.js";

export default function useQuiz() {
  const getQuiz = ref([]);

  const setQuiz = async () => {
    getQuiz.value = await fetchQuiz();
  };

  const createQuiz = (question) => {
    storeQuiz(question);
  };

  onMounted(setQuiz);

  return {
    getQuiz,
    createQuiz,
    setQuiz,
  };
}
