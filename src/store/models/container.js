import File from "@/store/models/file";
import Party from "@/store/models/party";

class Container {
    data = {
        id: null,
        name: null,
        size: null,
        createdAt: null,
        parties: [],
        files: [],
    };

    constructor(containerData) {
        this.data.id = containerData.id;
        this.data.name = containerData.name;
        this.data.size = containerData.size;
        this.data.createdAt = containerData.createdAt;

        containerData.files.forEach(file => {
            this.data.files.push(new File(file).data);
        });

        containerData.parties.forEach(party => {
            this.data.parties.push(new Party(party).data);
        });
    }
}

export default Container;
