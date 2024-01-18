/*
 * @Author: kime
 * @Date: 2022-06-29 14:32:09
 * @LastEditors: liaozheqin
 * @LastEditTime: 2024-01-12 15:25:26
 * @Description: redux 的Action 状态管理
 */

import { LOGINSTATUS } from "../../actiontypes/loginActionType"

/**
 * 设置登录的Token
 * @param value token的值
 * @returns 
 */
export function setLoginToken (value: any) {
    return {
        type: LOGINSTATUS,
        value: value
    }
}