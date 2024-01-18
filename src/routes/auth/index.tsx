/*
 * @Author: kime
 * @Date: 2023-04-04 16:28:45
 * @LastEditors: liaozheqin
 * @LastEditTime: 2024-01-16 09:45:46
 * @Description: 身份验证的，路由守卫中间件
 */
import { Navigate, useLocation } from 'react-router-dom';
import { removeAllAxiosPending } from '../../services/http/cancelTokenUtils'; //工具
import { searchRoute } from '../utils'; //工具
import { rootRouter } from '../routes'; //所有的路由容器对象

function AuthRouter (IProps: { children: JSX.Element }) {
    const { pathname } = useLocation(); //获取对应的，路径地址
    const route = searchRoute(pathname, rootRouter); //route 的对象

    //在跳转页面的时候，清空所有的请求
    removeAllAxiosPending();

    // * 判断是否有Token
    const token = localStorage.getItem("token") ||sessionStorage.getItem("token") ||null;

    //用户已经登录了，但是再次打开登录页面，就默认跳转到首页
    if (typeof route.meta?.requiresAuth == "boolean" && !route.meta?.requiresAuth && token) return <Navigate to="/" replace />;;

    // * 判断当前路由是否需要访问权限(不需要权限直接放行)
    if (!route.meta?.requiresAuth) return IProps.children;
    // * 判断是否有Token
    if (!token && route.meta?.requiresAuth) return <Navigate to="/login" replace /> 


    return IProps.children;
}
export default AuthRouter;