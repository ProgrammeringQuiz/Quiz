const baseURL = "http://localhost:8080/api/user";
export const signUpRequest = async (userInput) => {
    const formData = new FormData();
    for (const name in userInput) {
        formData.append(name,userInput[name]);
    }

    for (var pair of formData.entries()) {
        console.log("formData: ", pair[0]+ ', ' + pair[1]);
    }

    const res = await fetch(`${baseURL}`, {
        method: "POST",
      // headers: {
      //     "Content-Type": "multipart/form-data",
      // },
        body : `${formData}`

    });
    const resData = await res.json()
    return resData
};