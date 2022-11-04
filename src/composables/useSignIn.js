import {ref, onMounted} from "vue";
import {
    signInRequest,
    fetchJWT
} from "../apis/signIn.js";

export default function useSignIn() {
    const getToken = ref();

    const signInInput = (input) => {
        signInRequest(input);
    };

    const setToken = async () => {
        getToken.value = await fetchJWT();
    };

    onMounted(setToken)

    return {
        signInInput,
        getToken,
        setToken
    };
}