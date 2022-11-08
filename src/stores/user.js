import { defineStore } from "pinia";

export const useUserStore = defineStore( {

    id: 'user',
        state: () => ({
        user:  null
    }),
        actions: {
            getUser(userId, userToken) {
                fetch(`http://localhost:8080/api/user/${userId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": userToken
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        this.user = data.data;
                    })
                    .catch((err) => console.log(err));
            }
        }
});
