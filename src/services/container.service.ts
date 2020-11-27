import HttpService from '@/services/http.service';

import { container } from "@/store/interfaces/interfaces";

class ContainerService {

    getUserContainerList(): Promise<any> {
        return HttpService.get('containers')
            .then((res) => res.data);
    }

    getContainer(id: string): Promise<container> {
        return HttpService.get(`containers/${id}`)
            .then((res) => res.data);
    }
}

export default new ContainerService();
