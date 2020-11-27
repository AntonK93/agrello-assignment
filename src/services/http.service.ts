import axios from 'axios';
import app from '@/main';
import config from '@/config/app.config';
import NotificationService from '@/services/notification.service';
import Vue from "vue";
const qs = require('qs');


const instance = axios.create({
    baseURL: config.api_url,
    paramsSerializer: params => qs.stringify(params),
});

instance.interceptors.request.use((request) => {

    Vue.prototype.$Progress.start();
    app.$store.dispatch('setLoading', true);

    const token = Vue.prototype.$cookies.get('access-token');

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
}, (error) => {
    Vue.prototype.$Progress.finish();
    app.$store.dispatch('setLoading', false);

    NotificationService.error('Network error. Check your connection');
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    Vue.prototype.$Progress.finish();
    app.$store.dispatch('setLoading', false);

    // Show Api errors
    if (typeof response.data.ok !== 'undefined') {
        if (!response.data.ok) {
            NotificationService.error(response.data.desc);
            return Promise.reject(response.data.desc);
        }
    }

    return response;
}, (error) => {
    Vue.prototype.$Progress.finish();
    app.$store.dispatch('setLoading', false);

    if (typeof error.response === 'undefined'
        || typeof error.response.status === 'undefined') {
        NotificationService.error('Network error. Check your connection');
        return Promise.reject(error);
    }

    // Server down
    if (error.response.status >= 500) {
        NotificationService.error('Server Unavailable.');
        return Promise.reject(error);
    }

    // Auth error
    if (error.response.status === 401) {
        NotificationService.error(error.response.data.error, 'Error');
        app.$store.dispatch('auth/setLoggedIn', false);
        return Promise.reject(error);
    }

    // Not found error
    if (error.response.status === 404) {
        NotificationService.error('Not found', 'Error 404');
        return Promise.reject(error);
    }

    // Api errors that are returned with error codes
    NotificationService.stickyError(error.response.data.message, '');
    return Promise.reject(error);
});

export default instance;
