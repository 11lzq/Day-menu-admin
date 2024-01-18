/*
 * @Author: kime
 * @Date: 2022-07-01 14:36:16
 * @LastEditors: kime
 * @LastEditTime: 2022-07-01 18:05:24
 * @Description: 自定义请求结果拦截器，用户处理公共的返回值配置内容等
 */
const customInterceptors = (instance: any) => {
    console.log('====================================');
    console.log("在这里处理404、500等状态码的处理");
    console.log('====================================');

    // 添加响应拦截器
    instance.interceptors.response.use((response: any) => {
        if (response.status == 200) {
            // 对响应数据做点什么
            return response.data;
        }
        console.log("接口出现__" + response.status + "__的错误");
        return null;

    }, (error: any) => {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
}

export default customInterceptors;