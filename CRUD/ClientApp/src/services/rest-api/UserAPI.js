import ServerRequest from '../ServerRequest';

const UserAPI = {
    /**
     * Получение данных о пользователе.
     * @return {Promise}
     */
    getUserList() {
        return ServerRequest.get('api/v1/users');
    },
    createUser(payload) {
        return ServerRequest.post('api/v1/users', payload);
    },
    editSwimmer(payload) {
        return ServerRequest.put('api/v1/users', payload);
    },
    deleteSwimmer(payload) {
        return ServerRequest.delete('api/v1/users', payload);
    },

};

export default UserAPI;
