import File from "@/store/models/file";
import Party from "@/store/models/party";

import { container, file, party } from "@/store/interfaces/interfaces";

class Container {
    data: container = {
        id: '',
        name: '',
        size: 0,
        createdAt: '',
        parties: [],
        files: [],
    };

    constructor(containerData: container) {
        this.data.id = containerData.id;
        this.data.name = containerData.name;
        this.data.size = containerData.size;
        this.data.createdAt = containerData.createdAt;

        containerData.files.forEach((file: file) => {
            this.data.files.push(new File(file).data);
        });

        containerData.parties.forEach((party: party) => {
            this.data.parties.push(new Party(party).data);
        });
    }
}

export default Container;
