import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/auth';
import user from '@/store/user';
import containers from '@/store/containers';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        user,
        containers,
    },
    state: {
        loading: false,
    },
    mutations: {
        loading(state, loading) {
            state.loading = loading;
        },
    },
    actions: {
        init({ dispatch }) {
            dispatch('auth/init');
        },
        setLoading({ commit }, loading) {
            commit('loading', loading);
        }
    },
});

export default store;
