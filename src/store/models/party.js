import User from "@/store/models/user";

class Party {
    data = {
        id: null,
        permissions: null,
        user: null,
        createdAt: null,
    };

    constructor(partyData) {
        this.data.id = partyData.id;
        this.data.permissions = partyData.permissions;
        this.data.user = new User(partyData.user).data;
        this.data.createdAt = partyData.createdAt;
    }
}

export default Party;
