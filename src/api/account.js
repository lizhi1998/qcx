import $http from '../util/http.js'

/**
 * @name 登录
 * @param {Object} options {account, password}
 */
export function doLogin(options) {
    if (options.account && options.password) {
        const url = 'user/login'
        const data = `account=${options.account}&password=${options.password}`
        return $http.post(url, data)
    }
}

/**
 * @name 注销
 */
export function doLogout() {
    const url = 'user/logout'
    return $http.post(url)
}

/**
 * @name 获取身份信息
 */
export function getStuInfo() {
    const url = 'user/getInfo'
    return $http.post(url)
}