const baseURL = "http://localhost:8080/api/user/signIn";

export const signInRequest = async (userInput) => {
    const res = await fetch(`${baseURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput)
    });
    const resData = await res.json()
    return resData
};
