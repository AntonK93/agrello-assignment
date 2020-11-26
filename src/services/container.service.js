import HttpService from '@/services/http.service';

class ContainerService {

    getUserContainerList() {
        return HttpService.get('containers')
            .then((res) => res.data);
    }

    getContainer(id) {
        return HttpService.get(`containers/${id}`)
            .then((res) => res.data);
    }
}

export default new ContainerService();
