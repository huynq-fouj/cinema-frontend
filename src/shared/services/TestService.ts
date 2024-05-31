import { https } from "./https";

class TestService {

    getTest() {
        return https.get("/test");
    }

}

export default new TestService;