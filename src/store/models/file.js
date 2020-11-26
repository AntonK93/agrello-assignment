class File {
    data = {
        id: null,
        name: null,
        mimeType: null,
        size: null,
        createdAt: null,
    };

    constructor(fileData) {
        this.data.id = fileData.id;
        this.data.name = fileData.name;
        this.data.mimeType = fileData.mimeType;
        this.data.size = fileData.size;
        this.data.createdAt = fileData.createdAt;
    }
}

export default File;
