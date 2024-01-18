/*
 * @Author: liaozheqin
 * @Date: 2023-04-06 13:43:32
 * @LastEditTime: 2024-01-15 14:51:14
 * @LastEditors: liaozheqin
 * @Description: 
 * @FilePath: /react-tsvite-cli-main/src/routes/interface/index.ts
 */
import React from "react";

export interface MetaProps {
    keepAlive?: boolean;
    requiresAuth?: boolean; //是否需要权限访问
    title?: string;
    key?: string;
    icon?: string|React.ReactNode;
    auth?:string    //可访问的角色权限
}
export interface RouteObject {
    caseSensitive?: boolean;
    children?: RouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
    meta?: MetaProps;
    isLink?: string;
}
