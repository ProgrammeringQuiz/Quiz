const baseURL = "http://localhost:8080/api/user";
export const signUpRequest = async (userInput) => {
    const formData = new FormData();
    for (const name in userInput) {
            formData.append(name,userInput[name]);
    }
    const res = await fetch(`${baseURL}`, {
        method: "POST",
        body : formData,
    });
    const resData = await res.json()
    return resData
};