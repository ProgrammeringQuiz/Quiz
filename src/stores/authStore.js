import { defineStore } from 'pinia';

import { router } from '@/router';
import {signInRequest} from "@/apis/signIn.js";
import {signUpRequest} from "@/apis/signUp";


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(input) {
            const userInfo = await signInRequest(input);

            this.user = userInfo;

            localStorage.setItem('user', JSON.stringify(userInfo));

            router.push(this.returnUrl || '/profile');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        },
        async signUp(input) {
            console.log("authStoreInput: ", input)
            await signUpRequest(input);

        }
    }
});
