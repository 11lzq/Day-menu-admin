/*
 * @Author: liaozheqin
 * @Date: 2023-04-06 13:43:32
 * @LastEditTime: 2024-01-18 12:04:25
 * @LastEditors: liaozheqin
 * @Description: 
 * @FilePath: /Day-menu-admin/src/routes/routes.tsx
 */
import {  ReactNode, Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom';
const Login = lazy(() => import("../pages/login"));
const OnePage = lazy(() => import("../pages/onePage"));
const TwoPage = lazy(() => import("../pages/twoPage"));
const ReduxPage = lazy(() => import("../pages/reduxpages"));
const NotFoundPage = lazy(() => import("../pages/notfound"));
const HomeLayout = lazy(() => import("../layout/HomeLayout"));

//懒加载
export const lazyComponent = (element:ReactNode):ReactNode=>{
    return (<Suspense fallback={<div>loading...</div>}>{element}</Suspense>)
}

export const rootRouter = [
    {
        path: "/login", //登录的页面
        element: lazyComponent(<Login />)
    },
    {
        path: "/404", //404的页面
        element: lazyComponent(<NotFoundPage />)
    },
    {
        path: "/",
        element: lazyComponent(<HomeLayout />),
        children:[
            {
                path: "/home", //首页
                // element:lazyComponent(<HomePage />),
                meta: {
                    requiresAuth: false,  //如果是需要登录的页面，需要加上这个配置内容
                    title: "首页",
                    key: "home",
                },
                children: [
                    {
                        index: true,
                        path: "one",
                        element: lazyComponent(<OnePage />),
                        meta: {
                            requiresAuth: false,
                            title: "1",
                            key: "/home/one"
                        }
                    },
                    {
                        path: "two",
                        element: lazyComponent(<TwoPage />),
                        meta: {
                            requiresAuth: false,
                            title: "2",
                            key: "/home/two"
                        },
                    },
                    {
                        path: "",
                        element: <Navigate to="one" replace />,
                    },
        
                ]
            },
            {
                path: "/reduxdemopage", //redux页
                element: lazyComponent(<ReduxPage />),
                meta: {
                    requiresAuth: true,  //如果是需要登录的页面，需要加上这个配置内容
                    title: "redux页",
                    key: "reduxdemopage",
                    auth: "redux"
                }
            },
        ]
    },
];