import Vue from 'vue';

class NotificationService {
    success(text: string, title = 'Success!'): void {
        return Vue.notify({
            type: 'success',
            title,
            text,
        });
    }

    error(text: string, title = 'Error!'): void {
        return Vue.notify({
            type: 'error',
            title,
            text,
        });
    }

    stickyError(text: string, title: string): void {
        return this.error(text, title);
    }
}

export default new NotificationService();
