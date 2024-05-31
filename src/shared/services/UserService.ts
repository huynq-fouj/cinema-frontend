import HeaderService from "./HeaderService";
import { HttpClient } from "./HttpClient";

class UserService {

    http: HttpClient;

    constructor() {
        this.http = new HttpClient();
    }

    getAllUsers() {
        return this.http.get('/admin/users', {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

    createUser(data: any) {
        return this.http.post('/admin/users', data, {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

    updateUser(id: number, data: any) {
        return this.http.put(`/admin/users/${id}`, data, {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

    deleteUser(id: number) {
        return this.http.delete(`/admin/users/${id}`, {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

}

export default new UserService();