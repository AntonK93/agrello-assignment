import axios from 'axios';
import config from '@/config/app.config';
import NotificationService from "@/services/notification.service";
const qs = require('qs');

class AuthService {

    authInstance = axios.create({
        baseURL: config.auth_data.auth_url,
        headers: {
            'Authorization': `Basic ${btoa(config.auth_data.client_id + ':' + config.auth_data.client_secret)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    getAccessToken(code: string): Promise<any> {
        return this.authInstance.post('token', qs.stringify({
            grant_type: 'authorization_code',
            code: code,
            client_id: config.auth_data.client_id,
            redirect_uri: config.app_url+config.auth_data.redirect_to_route,
        }))
            .then((res) => {
                NotificationService.success('Successfully authenticated!');
                return res.data;
            })
            .catch((error) => {
                NotificationService.error(error.response.data.error_description, 'Error');
                throw error;
            });
    }
}

export default new AuthService();
