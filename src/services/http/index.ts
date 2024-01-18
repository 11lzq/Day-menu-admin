/*
 * @Author: kime
 * @Date: 2022-07-01 14:02:04
 * @LastEditors: kime
 * @LastEditTime: 2022-11-22 09:17:09
 * @Description: 
 */
import HttpUtils from "./httpUtils"; //导出工具


/**
 * 从缓存中读取数据
 * @param isCache 是否缓存 预留缓存配置
 * @param requestType 请求类型
 * @returns {function(*=, *=, *=): (*|*)}
 */
const RequestData = (isCache = false, requestType: string) => (url: any, params: any, canclelikeapi: boolean = false, callback?: (arg0: any) => any) => {

    //默认的执行函数
    const requestFunc = (result?: undefined) => {
        if (result) {
            if (callback && typeof callback === 'function') {
                return callback(result);
            } else {
                return result;
            }
        }
        //返回出来的promise
        let promise = requestType === 'GET' ?
            HttpUtils.getRequest(url, params, canclelikeapi) :
            requestType === 'POST' ?
                HttpUtils.postRequest(url, params, canclelikeapi) :
                HttpUtils.postRequest(url, params, canclelikeapi, { contentType: "multipart/form-data" }); //去网络拿数据

        if (callback && typeof callback === 'function') {
            promise.then((response: any) => {
                return callback(response)
            })
        }
        return promise;
    };

    if (isCache) {
        return null;
    }

    // 预留缓存配置
    return requestFunc();
};

/**
 * GET 请求
 */
const Get = RequestData(false, 'GET');

/**
 * POST 请求
 */
const Post = RequestData(false, 'POST');

/**
 * 上传文件，上传图片
 */
const UploadFile = RequestData(false, "File");

export { Get, Post, UploadFile };
