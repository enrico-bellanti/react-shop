import { create } from "zustand";
import * as AuthService from './auth.api';

export interface AuthState {
    token: string | null;
    isLogged: boolean;
    error: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    token: AuthService.getToken(),
    isLogged: AuthService.isLogged(),
    error: false,
    login: async (username: string, password: string) => {
        set({ error: false, isLogged: false })
        try {
            await AuthService.login(username, password)
            set({ isLogged: AuthService.isLogged(), token: AuthService.getToken() })
        } catch (e) {
            set({ error: true, isLogged: false })
        }
    },
    logout: () => {
        AuthService.logout()
        set({ isLogged: false, token: null })
    }
}))