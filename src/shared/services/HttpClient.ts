import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { environment } from "../../environments/environment";
import HeaderService from "./HeaderService";
import AuthService from "./AuthService";
import StorageService from "./StorageService";

export class HttpClient {
    baseUrl: string  = environment.apiUrl;
    axiosInstance: AxiosInstance;
    isRefreshing: boolean = false;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            headers: HeaderService.createAuthorizationHeader(),
        });

        this.axiosInstance.interceptors.response.use(
            res => res,
            async error => {
                const originalRequest = error.config;
                if (error.response?.status === 401 && !originalRequest._retry && !this.isRefreshing) {
                    originalRequest._retry = true;
                    this.isRefreshing = true;

                    try {
                        const newAccessToken = await this.refreshToken();
                        this.isRefreshing = false;
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        return this.axiosInstance(originalRequest);
                    } catch (refreshError) {
                        this.isRefreshing = false;
                        return Promise.reject(refreshError);
                    }
                }

                return Promise.reject(error);
            }
        )
    }

    private async refreshToken() {
        try {
            const refreshToken = StorageService.getRefreshToken();
            const response = await AuthService.refreshToken({refreshToken});
            const newAccessToken = response.data.access_token;
            StorageService.setAccessToken(newAccessToken);    
            return newAccessToken;
        } catch (error) {
            throw new Error("Failed to refresh access token");
        }
    }

    get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        return this.axiosInstance.get(url, config);
    }

    post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        return this.axiosInstance.post(url, data, config);
    }

    delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        return this.axiosInstance.delete(url, config);
    }

    put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        return this.axiosInstance.put(url, data, config);
    }

}

export default new HttpClient();