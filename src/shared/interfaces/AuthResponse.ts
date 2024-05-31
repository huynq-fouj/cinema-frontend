import { User } from "./User";

export interface AuthResponse {
    access_token: string;
    refresh_token: string;
    user: User;
}