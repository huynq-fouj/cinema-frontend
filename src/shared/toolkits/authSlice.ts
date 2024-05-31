import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import StorageService from "../services/StorageService";
import AuthService from "../services/AuthService";
import { AuthResponse } from "../interfaces/AuthResponse";

const initialState = {
    isLoggedIn: StorageService.isLoggedIn(),
    token: StorageService.getAccessToken(),
    refresh_token: StorageService.getRefreshToken(),
    user: StorageService.getUser(),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthResponse>) => {
            StorageService.setAccessToken(action.payload?.access_token);
            StorageService.setRefreshToken(action.payload?.refresh_token);
            StorageService.setUser(action.payload?.user);
            state.isLoggedIn = true;
            state.token = action.payload?.access_token;
            state.refresh_token = action.payload?.refresh_token;
            state.user = action.payload?.user;
        },
        logout: state => {
            AuthService.logout().then(res => console.log(res)).catch(err => console.error(err));
            StorageService.logOut();
            state.isLoggedIn = false;
            state.token = "";
            state.refresh_token = "";
            state.user = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;