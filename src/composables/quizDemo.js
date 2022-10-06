import { ref, onMounted } from "vue";
import {
    fetchQuiz,
} from "../apis/quiz.js";

export default function useQuiz() {
    const getQuiz = ref([]);

    const setQuiz = async () => {
        getQuiz.value = await fetchQuiz()
    };

    onMounted(setQuiz);

    return {
        getQuiz,
        setQuiz
    };
}