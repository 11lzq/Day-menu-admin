/*
 * @Author: kime
 * @Date: 2022-07-04 09:35:00
 * @LastEditors: kime
 * @LastEditTime: 2022-11-22 09:16:23
 * @Description: cancelTokenUtils.ts 取消终止Axios的事件封装工具
 */

import axios, { CancelToken, CancelTokenSource } from "axios";

//创建一个 cancelSources 的 Map对象，用于存储所有的CancelTokenSource的对象
const cancelSources = new Map<string, CancelTokenSource>([]);

//Cancel的事件处理
function cancelLastRequest (requestId: string): void {
    const token = cancelSources.get(requestId);
    if (token) {
        token.cancel();
    }
}

//获取 存储对象中的  cancelToken对象 并返回  CancelToken类型对象：由axios引入
function getCancelToken (requestId: string): CancelToken {
    //取消相同的token请求
    cancelLastRequest(requestId);

    //获取当前请求的sourceToken
    const nextCancelSource = axios.CancelToken.source();

    //存储新的sourceToken到 Map对象当中
    cancelSources.set(requestId, nextCancelSource);

    console.log(requestId, nextCancelSource.token);
    //返回source对象
    return nextCancelSource.token;
}

//删除所有的请求
function removeAllAxiosPending () {
    cancelSources.forEach(cancel => {
        console.log("取消对象", cancel);
    });
    cancelSources.clear();
}


//导出工具
export { getCancelToken, cancelLastRequest, removeAllAxiosPending };