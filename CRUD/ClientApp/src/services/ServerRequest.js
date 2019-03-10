import axios from 'axios';
import * as _ from 'lodash';

const pending = [];

const ServerRequest = {
    request: (httpMethod, args) => {
        const endPoint = args[0];
        const url = `${process.env.REACT_APP_API_URL}${endPoint}`;
        const cancel = axios.CancelToken.source();

        const opts = {
            cancelToken: cancel.token,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: httpMethod,
            credentials: `${process.env.REACT_APP_API_CREDENTIALS}`,
            url,
            ...(args[2] || {}),
        };
        if (args[1]) {
            if (httpMethod === 'get') {
                opts.params = args[1];
            } else {
                opts.data = args[1];
            }
        }

        pending.push(cancel);
        return axios(opts)
        .then((res) => {
            pending.splice(pending.indexOf(cancel), 1);
            if (ServerRequest.isJSON(res)) {
                return res;
            } else {
                return undefined;
            }
        })
        .catch((err) => {
            pending.splice(pending.indexOf(cancel), 1);
            if (axios.isCancel(err)) {
                console.log('err');
            } else {
                throw err;
            }
        });
    },
    get: (...args) => {
        return ServerRequest.request('get', args);
    },
    post: (...args) => {
        return ServerRequest.request('post', args);
    },
    put: (...args) => {
        return ServerRequest.request('put', args);
    },
    patch: (...args) => {
        return ServerRequest.request('patch', args);
    },
    delete: (...args) => {
        return ServerRequest.request('delete', args);
    },
    errorHandler: (error) => {
        if (_.get(error, 'response.status') === 401) {
            const pathname = window.location.hash ? window.location.hash.replace('#', '') : '';
            return {
                payload: pathname,
                type: 'UNAUTHORIZED',
            };
        } else {
            return false;
        }
    },
    isJSON: (value) => {
        return typeof (value.data) != String;
    }
};
export default ServerRequest;
