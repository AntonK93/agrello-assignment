import HttpService from '@/services/http.service';

import { userData } from "@/store/interfaces/interfaces";

class UserService {

    getUserInfo(): Promise<userData> {
        return HttpService.get('identities/me')
            .then((res) => res.data);
    }
}

export default new UserService();
