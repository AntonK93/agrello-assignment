import config from '@/config/app.config';
import AuthService from '@/services/auth.service';
import Vue from 'vue'
import {Module} from "vuex";

const authModule: Module<any, any> = {
    namespaced: true,
    state: {
        loggedIn: false,
    },
    mutations: {
        loggedIn(state, loggedIn: boolean) {
            state.loggedIn = loggedIn;
            if (!loggedIn) {
                Vue.prototype.$cookies.remove('access-token');
            }
        },
    },
    actions: {
        init({ dispatch }): void {
            if (Vue.prototype.$cookies.get('access-token')) {
                dispatch('setLoggedIn', true);
            }
        },
        setLoggedIn({ commit }, isLoggedIn: boolean): void {
            commit('loggedIn', isLoggedIn);
        },
        getAccessToken({ commit }, code): Promise<any> {
            return AuthService.getAccessToken(code)
                .then((res) => {
                    Vue.prototype.$cookies.set('access-token', res['access_token'], res['expires_in']);
                    commit('loggedIn', true);
                    return res;
                })
                .catch(error => {
                    throw error;
                })
        },
    },
    getters: {
        loggedIn(state): boolean {
            return state.loggedIn;
        },
        authLink(): string {
            let url = `${config.auth_data.auth_url}authorize?`;
            const params: { [char: string]: string } = {
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

export default authModule;
