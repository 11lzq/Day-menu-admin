/*
 * @Author: kime
 * @Date: 2022-06-29 14:32:15
 * @LastEditors: liaozheqin
 * @LastEditTime: 2024-01-12 15:31:54
 * @Description: 所有的Action集合
 */


import * as loginAction from "./loginAction"; //登录模块的store状态管理
import * as layoutAction from "./layoutAction"; //布局模块的store状态管理

const ReducerActions = {
    ...loginAction,
    ...layoutAction
}

export default ReducerActions;