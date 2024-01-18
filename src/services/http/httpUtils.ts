/*
 * @Author: kime
 * @Date: 2022-07-01 14:33:57
 * @LastEditors: kime
 * @LastEditTime: 2022-07-04 09:37:59
 * @Description: 网络请求的具体实现
 */
import axios, { CancelToken, CancelTokenSource } from "axios";
import { getCancelToken } from "./cancelTokenUtils";
import customInterceptors from "./interceptors";
import { handleUrl } from "./utils";

const instance = axios.create();

//添加Https的拦截器
customInterceptors(instance);



/**
 * 网络请求 对象
 */
class HttpUtils {
    CancelToken (canvel: any): any {

    }
    /**
   * 请求公共方法
   * @param {*} method Request的method类型  post 或者 get  
   * @param {*} url 请求的接口
   * @param {*} params 请求参数
   * @param {*} header 自定义请求头
   * @returns 返回promise 对象
   */
    RequestOptions (method = "GET", url = "", params = {}, canclelikeapi: boolean = false, header: any = {}): Promise<any> {
        let contentType = header.contentType || "text/plain; charset=UTF-8";
        const option = {
            url: method == "GET" ? handleUrl(url)(params) : url,  //地址
            data: method == "GET" ? {} : { ...params },   //传参
            method: method, //请求方式 
            timeout: 30000,
            headers: {
                'content-type': contentType,
                ...header,
            },
            cancelToken: getCancelToken(url),
        };

        return instance.request(option).then((res) => {
            return res;
        });
    }

    /**
     * 类的方法：发送get请求
     * @param url url的名称
     * @param params 请求的参数
     * @param canclelikeapi 是否终止已发送的相同的 api接口（get请求不包含参数）
     */
    getRequest (url: string, params: any, canclelikeapi: boolean, header: any = {}): Promise<void> {
        return this.RequestOptions("GET", url, params, canclelikeapi, header);
    }

    /**
     * 类的方法，发送post请求
     * @param url url的名称
     * @param params 请求的参数
     * @param canclelikeapi 是否终止已发送的相同的 api接口（get请求不包含参数）
     */
    postRequest (url: string, params: any, canclelikeapi: boolean, header: any = {}): Promise<void> {
        return this.RequestOptions("POST", url, params, canclelikeapi, header);
    }
};

export default new HttpUtils();