import axios, { AxiosInstance } from "axios";
import { environment } from "../../environments/environment";

export const https: AxiosInstance = axios.create({
    baseURL: environment.apiUrl,
    
});