import { HttpClient } from "./HttpClient";

class GenreService {
    http: HttpClient;

    constructor() {
        this.http = new HttpClient();
    }

}

export default new GenreService();