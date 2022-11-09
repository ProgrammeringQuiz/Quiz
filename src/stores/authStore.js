import { defineStore } from 'pinia';

import { router } from '@/router';
import {signInRequest} from "@/apis/signIn.js";
import {signUpRequest} from "@/apis/signUp";


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        err: JSON.parse(localStorage.getItem('err')),
        signUpErr: JSON.parse(localStorage.getItem('signUpErr')),
        logoutButton: JSON.parse(localStorage.getItem('logoutButton')),
        returnUrl: null
    }),
    actions: {
        async login(input) {
            const userInfo = await signInRequest(input);
            this.user = userInfo;
            this.err = userInfo;
            if (this.err.msg === undefined) {
                localStorage.setItem('user', JSON.stringify(userInfo));
                this.logoutButton = true;
                router.push(this.returnUrl || '/profile');
            }
        },
        logout() {
            this.user = null;
            this.logoutButton = false;
            localStorage.removeItem('user');
            router.push('/login');
        },
        async signUp(input) {
            const signUpUser = await signUpRequest(input);
            this.signUpErr = signUpUser.errMsg;
            if (this.signUpErr === undefined) {
                router.push('/login');
                alert("Sign up completed")
            }
        }
    }
});
