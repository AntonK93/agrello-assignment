import UserService from '@/services/user.service';

export default {
    namespaced: true,
    state: {
        userData: {
            dateOfBirth: null,
            firstName: null,
            lastName: null,
            identifier: null,
        },
    },
    mutations: {
        userData(state, userData) {
            state.userData.firstName = userData.firstName;
            state.userData.lastName = userData.lastName;
            state.userData.identifier = userData.identifier;
            state.userData.dateOfBirth = userData.dateOfBirth;
        },
    },
    actions: {
        getUserInfo({ commit }) {
            return UserService.getUserInfo()
                .then((res) => {
                    commit('userData', res);
                    return res;
                });
        },
    },
};
