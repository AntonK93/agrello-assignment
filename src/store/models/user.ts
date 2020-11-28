import { user } from "@/store/interfaces/interfaces";

class User {
    data: user = {
        id: '',
        username: '',
    };

    constructor(userData: user) {
        this.data.id = userData.id;
        this.data.username = userData.username;
    }
}

export default User;
