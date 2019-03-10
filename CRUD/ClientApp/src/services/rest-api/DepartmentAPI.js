import ServerRequest from '../ServerRequest';

const DepartmentAPI = {
    /**
     * Получение данных о пользователе.
     * @return {Promise}
     */
    getDepartmentList() {
        return ServerRequest.get('api/v1/departments');
    },
};

export default DepartmentAPI;
