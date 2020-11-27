import UserService from '@/services/user.service';
import {Module} from "vuex";

import { userData } from "@/store/interfaces/interfaces";

const userModule: Module<any, any> = {
    namespaced: true,
    state: {
        userData:  {
            dateOfBirth: '',
            firstName: '',
            lastName: '',
            identifier: '',
        },
    },
    mutations: {
        userData(state, userData: userData) {
            state.userData.firstName = userData.firstName;
            state.userData.lastName = userData.lastName;
            state.userData.identifier = userData.identifier;
            state.userData.dateOfBirth = userData.dateOfBirth;
        },
    },
    actions: {
        getUserInfo({ commit }): Promise<userData> {
            return UserService.getUserInfo()
                .then((res) => {
                    commit('userData', res);
                    return res;
                });
        },
    },
};

export default userModule;
