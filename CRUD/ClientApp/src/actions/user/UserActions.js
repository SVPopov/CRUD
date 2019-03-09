export function getUserList() {
    return {
        type: 'USER_LIST_FETCH',
    };
}

export function createUser(body) {
    return {
        type: 'USER_DATA_CREATE',
        payload: body,
    };
}


export function editUser(body) {
    return {
        type: 'USER_DATA_EDIT',
        payload: body,
    };
}


export function deleteUser(body) {
    return {
        type: 'USER_DATA_DELETE',
        payload: body,
    };
}
