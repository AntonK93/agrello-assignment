import { file } from "@/store/interfaces/interfaces";

class File {
    data: file = {
        id: '',
        name: '',
        mimeType: '',
        size: 0,
        createdAt: '',
    };

    constructor(fileData: file) {
        this.data.id = fileData.id;
        this.data.name = fileData.name;
        this.data.mimeType = fileData.mimeType;
        this.data.size = fileData.size;
        this.data.createdAt = fileData.createdAt;
    }
}

export default File;
