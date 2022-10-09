const baseURL = "http://localhost:3011/quizDemo";

export const fetchQuiz = async () => {
    const response = await fetch(`${baseURL}`)
    return await response.json()
};

export const storeQuiz = async (question) => {
    return await fetch(`${baseURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(question)
    });
};
