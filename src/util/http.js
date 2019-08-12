import Axios from 'axios'
import {
    Toast
} from 'vant'
import config from '../config/config'
import $router from '../router'
import * as utils from './util.js'

const {
    isCrossDomain,
    homePage,
    loginPage
} = config


const logger = utils.logger

let axiosConfig = {};

if (isCrossDomain) {
    axiosConfig.withCredentials = true;
    axiosConfig.crossDomain = true;
}

const $http = Axios.create(axiosConfig);

// Request 拦截器
$http.interceptors.request.use(
    config => {
        config.Toast = Toast.loading({
            message: '请稍后...'
        })
        config.url = utils.getApiUrl(config.url);

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Response 拦截器
$http.interceptors.response.use(
    response => {
        if (response.Toast) {
            response.Toast.clear()
        }

        response = response.data;
        response.status = Number(response.status);
        switch (response.status) {
            case 200:
                response.info !== '' && Toast.success(response.info);
                return Promise.resolve(response);
            case 401:
                $router.replace(loginPage);
                // $store.dispatch('SET_LOGOUT');
                return Promise.resolve(response);
            case 403:
                Toast.fail({
                    message: response.info !== '' ? response.info : '无权限操作资源，访问被拒绝',
                });
                return Promise.resolve(response);
            case 404:
                //资源不存在
                Toast.fail({
                    message: response.info !== '' ? response.info : '资源不存在',
                });
                $router.replace(homePage);
                return Promise.resolve(response);
        }
        if (response.status === 200) {
            Toast({
                message: '请求错误 ' + response.status
            });
            return Promise.resolve(response);
        } else {
            response.info !== '' && Toast.fail({
                message: response.info,
            });
            return Promise.resolve(response);
        }
    },
    error => {
        if (error.response.Toast) {
            error.response.Toast.clear()
        }

        const response = error.response.data;
        logger.info(response);

        response.status = Number(response.status);
        switch (response.status) {
            default:
                response.info !== '' && Toast.fail({
                    message: response.info,
                });
                return Promise.reject(error);
        }
    }
);

export default $http