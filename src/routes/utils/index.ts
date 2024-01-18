/*
 * @Author: liaozheqin
 * @Date: 2023-04-06 13:43:32
 * @LastEditTime: 2024-01-17 11:24:41
 * @LastEditors: liaozheqin
 * @Description:
 * @FilePath: /react-tsvite-cli-main/src/routes/utils/index.ts
 */
import { RouteObject } from "../interface";

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (
  path: string,
  routes: RouteObject[] = []
): RouteObject => {
  let result: RouteObject = {};
  for (let item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      const res = searchRoute(path, item.children);
      if (Object.keys(res).length) result = res;
    }
  }
  return result;
};

export const findObjectByKey = (
  menuData: RouteObject[],
  idToFind: string
): RouteObject | null => {
  console.log(222);
  
  for (let i = 0; i < menuData.length; i++) {
    if (menuData[i].meta?.key === idToFind) {
      return menuData[i];
    } else if (menuData[i].children) {
      const result = findObjectByKey(menuData[i].children!, idToFind);
      if (result) {
        return result;
      }
    }
  }
  return null;
};
