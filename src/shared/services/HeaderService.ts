import { AxiosHeaders } from "axios";
import StorageService from "./StorageService";

export class HeaderService {

    createAuthorizationHeader() : AxiosHeaders {
        const token = StorageService.getAccessToken();
        return new AxiosHeaders().set(
            'Authorization', `Bearer ${token}`,
        );
    }

}

export default new HeaderService();