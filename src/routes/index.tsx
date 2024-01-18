/*
 * @Author: kime
 * @Date: 2022-06-29 17:34:01
 * @LastEditors: liaozheqin
 * @LastEditTime: 2024-01-18 12:06:45
 * @Description: 跟路由管理
 */
import { useRoutes, Navigate, Routes, Route } from "react-router-dom"; //使用路由的hooks
import { rootRouter } from "./routes"; //路由的列表管理
import { RouteObject } from "./interface";
import { AUTH_MAP } from "./authMap";
import { cloneDeep } from 'lodash';


export let routes: Array<any> = []
//页面容器
const PageRoutes = (props: any) => {
    routes = []
    const token = localStorage.getItem("token") || sessionStorage.getItem("token") || "";
    //拿到后端传来的该用户的权限，从AUTH_MAP中找到对应的路由列表
    const permissionCodeList: any[] = AUTH_MAP["admin"]
    /**
     * 根据权限匹配路由
     */
    const filterAuth = (rootRouter: RouteObject[]) => {
        // const list = rootRouter.filter((item) => !item.meta?.auth || permissionCodeList.includes(item.meta?.auth)) || [];
        // return list;
        let cloneRoutes = cloneDeep(rootRouter)
        return cloneRoutes.filter(route => {
            if (route.meta?.auth && !permissionCodeList.includes(route.meta?.auth)) {
                return false;
            }
            if (route.children) {
                route.children = filterAuth(route.children);
            }
            return true;
        });
    };
    /**
     * 判断路由是否需要登录权限
     */
    const filteredRoutes = (routes: RouteObject[]) => {
        return routes.filter(route => {
            if (route.meta && route.meta.requiresAuth) {
                return false;
            }
            if (route.children) {
                route.children = filteredRoutes(route.children);
            }
            return true;
        });
    }
    /**
     * 筛选出无需登录的页面
     */
    const removeRequiresAuth = (routes: RouteObject[]): RouteObject[] => {
        let cloneRoutes = cloneDeep(routes)
        return cloneRoutes.filter((route: RouteObject) => {
            if (route.meta?.requiresAuth && route.meta.requiresAuth === true) {
                return false;
            }
            if (route.children) {
                route.children = removeRequiresAuth(route.children);
            }
            return true;
        });
    }
    if (token) {
        routes = filterAuth(rootRouter);
        let elements = useRoutes(routes)
        return elements
    }
    else {
        const commonList: RouteObject[] = removeRequiresAuth(rootRouter)
        routes = commonList
        return (useRoutes(routes))
    }

};
export default PageRoutes;