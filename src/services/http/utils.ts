/*
 * @Author: ljx
 * @Date: 2022-05-06 10:22:32
 * @LastEditors: kime
 * @LastEditTime: 2022-07-01 14:46:49
 * @Description: Http请求的URl解析
 */

/**
 * GET 请求时，拼接请求URL
 * @param url 请求URL
 * @param params 请求参数
 * @returns {*}
 */
const handleUrl = (url: string) => (params: any) => {
    if (params) {
        let paramsArray: Array<any> = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])));
        if (url.search(/\?/) === -1) {
            typeof (params) === 'object' ? url += '?' + paramsArray.join('&') : url
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return url;
};

export { handleUrl }
