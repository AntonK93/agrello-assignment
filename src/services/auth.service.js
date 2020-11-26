import axios from 'axios';
import { stringify } from 'qs';
import config from '@/config/app.config';
import NotificationService from "@/services/notification.service";

class AuthService {

    authInstance = axios.create({
        baseURL: config.auth_data.auth_url,
        headers: {
            'Authorization': `Basic ${btoa(config.auth_data.client_id + ':' + config.auth_data.client_secret)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    getAccessToken(code) {
        return this.authInstance.post('token', stringify({
            grant_type: 'authorization_code',
            code: code,
            client_id: config.auth_data.client_id,
            redirect_uri: config.app_url+config.auth_data.redirect_to_route,
        }))
            .catch((error) => {
                NotificationService.error(error.response.data.error_description, 'Error');
                throw error;
            })
            .then((res) => {
                NotificationService.success('Successfully authenticated!');
                return res.data;
            });
    }
}

export default new AuthService();
