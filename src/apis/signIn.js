const baseURL = "http://localhost:8080/api/user/signIn";



export const signInRequest = async (userInput) => {
    return await fetch(`${baseURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput)
    });
};


export const
    fetchJWT = async () => {
        const response = await fetch(`${baseURL}`)
        return await response.json();
    };