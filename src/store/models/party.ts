import User from "@/store/models/user";

import { party } from "@/store/interfaces/interfaces";

class Party {
    data: party = {
        id: '',
        permissions: '',
        user: {
            id: '',
            username: '',
        },
        createdAt: '',
    };

    constructor(partyData: party) {
        this.data.id = partyData.id;
        this.data.permissions = partyData.permissions;
        this.data.user = new User(partyData.user).data;
        this.data.createdAt = partyData.createdAt;
    }
}

export default Party;
