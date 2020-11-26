import HttpService from '@/services/http.service';

class UserService {

    getUserInfo() {
        return HttpService.get('identities/me')
            .then((res) => res.data);
    }
}

export default new UserService();
