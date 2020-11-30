interface container {
    id: string,
    name: string,
    size: number,
    createdAt: string,
    parties: Array<party>,
    files: Array<file>,
}

interface file {
    id: string,
    name: string,
    mimeType: string,
    size: number,
    createdAt: string,
}

interface party {
    id: string,
    permissions: string,
    user: user,
    createdAt: string,
}

interface user {
    id: string,
    username: string,
}

interface userData {
    dateOfBirth: string,
    firstName: string,
    lastName: string,
    identifier: string,
}

export { container, file, party, user, userData }
