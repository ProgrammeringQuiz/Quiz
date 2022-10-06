const baseURL = "http://localhost:3011/quizDemo";

export const fetchQuiz = async () => {
    const response = await fetch(`${baseURL}`)
    return await response.json()
};

