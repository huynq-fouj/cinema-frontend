import { User } from "../interfaces/User";

const TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const USER = 'user';

class StorageService {

    getAccessToken() : string {
        const token = localStorage.getItem(TOKEN);
        if(token != null) return token;
        return "";
    }

    setAccessToken(token: string) : void {
        localStorage.setItem(TOKEN, token);
    }

    delAccessToken() : void {
        localStorage.removeItem(TOKEN);
    }

    getRefreshToken() : string {
        const token = localStorage.getItem(REFRESH_TOKEN);
        if(token != null) return token;
        return "";
    }

    setRefreshToken(token: string) : void {
        localStorage.setItem(REFRESH_TOKEN, token);
    }

    delRefreshToken() : void {
        localStorage.removeItem(REFRESH_TOKEN);
    }

    getUser() : User | null {
        const user = localStorage.getItem(USER);
        if(user) return JSON.parse(user);
        return null;
    }

    setUser(user: User) : void {
        localStorage.setItem(USER, JSON.stringify(user));
    }

    delUser() : void {
        localStorage.removeItem(USER);
    }

    isLoggedIn() : boolean {
        return this.getAccessToken() != "" && this.getUser() != null;
    }

    isUser(): boolean {
        return this.isLoggedIn() && this.getUser()?.role === 'USER';
    }

    isAdmin(): boolean {
        return this.isLoggedIn() && this.getUser()?.role === 'ADMIN';
    }

    logOut() : void {
        this.delAccessToken();
        this.delRefreshToken();
        this.delUser();
    }

    clearStorage() : void {
        localStorage.clear();
    }

}

export default new StorageService();