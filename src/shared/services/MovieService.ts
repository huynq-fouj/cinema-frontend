import HeaderService from "./HeaderService";
import { HttpClient } from "./HttpClient";

class MovieService {

    http: HttpClient;

    constructor() {
        this.http = new HttpClient();
    }

    getMovies(params: any) {
        return this.http.get('/movies');
    }

    getMovie(id: number) {
        return this.http.get(`/movies/${id}`);
    }

    getAllMovies(params: any) {
        return this.http.get('/admin/movies', {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

    createMovie(data: any) {
        return this.http.post('/admin/movies', data, {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

    updateMovie(id: number, data: any) {
        return this.http.put(`/admin/movies/${id}`, data, {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

    deleteMovie(id: number) {
        return this.http.delete(`/admin/movies/${id}`, {
            headers: HeaderService.createAuthorizationHeader(),
        });
    }

}

export default new MovieService();