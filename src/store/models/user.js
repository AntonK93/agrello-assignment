class User {
    data = {
        id: null,
        username: null,
    };

    constructor(userData) {
        this.data.id = userData.id;
        this.data.username = userData.username;
    }
}

export default User;
