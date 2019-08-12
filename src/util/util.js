/* eslint-disable */
import config from '../config/config.js'

const PROD_URL = config.build.url // 获取生产环境的 api url

const isCrossDomain = config.isCrossDomain
const consoleConfig = config.console

export const getApiUrl = api => {
    if (isCrossDomain && process.env.NODE_ENV === 'production') {
        return `${PROD_URL}/${api}`; //开启跨域直接返回
    } else {
        return `/api/${api}`;
    }
}

export const logger = {
    info: consoleConfig.show && consoleConfig.level === 'info' ? console.log : () => {}, // @todo 加入行号与时间显示 -- 可用于 Get、Post类型请求数据的输出
    debug: consoleConfig.show && consoleConfig.level === 'debug' ? console.log : () => {}, // @todo 加入行号与时间显示 -- 可用于回调中数据输出
    warn: consoleConfig.show && consoleConfig.level === 'warn' ? console.log : () => {}, // @todo 加入行号与时间显示 -- 用于可能会引发 bug 操作中数据的输出
    error: consoleConfig.show && consoleConfig.level === 'error' ? console.log : () => {} //@todo 加入行号与时间显示 -- 一般写到 catch 中
}