import { AxiosResponse } from "axios";
import { https } from "./https";
import HeaderService from "./HeaderService";
import { AuthRequest } from "../interfaces/AuthRequest";
import { RefreshTokenRequest } from "../interfaces/RefreshTokenRequest";
import { AuthResponse } from "../interfaces/AuthResponse";

class AuthService {

    login(data: AuthRequest): Promise<AxiosResponse<AuthResponse, any>> {
        return https.post(`/auth/login`, data);
    }

    signup(data: AuthRequest): Promise<AxiosResponse<any, any>> {
        return https.post(`/auth/signup`, data);
    }

    logout(): Promise<AxiosResponse<any, any>> {
        return https.post(`/auth/logout`, null, {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

    refreshToken(data: RefreshTokenRequest): Promise<AxiosResponse<any, any>> {
        return https.post(`/auth/refresh-token`, data);
    }

    updateProfile(data: any): Promise<AxiosResponse<any, any>> {
        return https.post(`/user`, data, {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

    changePassword(data: any): Promise<AxiosResponse<any, any>> {
        return https.post('/auth/change-password', data, {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

}

export default new AuthService();