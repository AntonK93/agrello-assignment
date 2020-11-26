import config from '@/config/app.config';
import AuthService from '@/services/auth.service';
import VueCookies from 'vue-cookies';

export default {
    namespaced: true,
    state: {
        loggedIn: false,
    },
    mutations: {
        loggedIn(state, loggedIn) {
            state.loggedIn = loggedIn;
            if (!loggedIn) {
                VueCookies.remove('access-token');
            }
        },
    },
    actions: {
        init({ dispatch }) {
            if (VueCookies.get('access-token')) {
                dispatch('setLoggedIn', true);
            }
        },
        setLoggedIn({ commit }, isLoggedIn) {
            commit('loggedIn', isLoggedIn);
        },
        getAccessToken({ commit }, code) {
            return AuthService.getAccessToken(code)
                .then((res) => {
                    VueCookies.set('access-token', res['access_token'], res['expires_in']);
                    commit('loggedIn', true);
                    return res;
                })
                .catch(error => {
                    throw error;
                })
        },
    },
    getters: {
        authLink() {
            let url = `${config.auth_data.auth_url}authorize?`;
            const params = {
                response_type: 'code',
                client_id: config.auth_data.client_id,
                redirect_uri: config.app_url+config.auth_data.redirect_to_route
            };

            Object.keys(params).forEach((key, index) => {
                url += `${key}=${params[key]}`;
                if (index !== (Object.keys(params).length-1))
                    url += '&';
            })
            return url;
        },
    },
};
