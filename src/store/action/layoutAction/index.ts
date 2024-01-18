/*
 * @Author: kime
 * @Date: 2022-06-29 14:32:09
 * @LastEditors: liaozheqin
 * @LastEditTime: 2024-01-12 15:29:35
 * @Description: redux 的Action 状态管理
 */

import { CHANGECOLLAPSED } from "../../actiontypes/layoutActionType"

/**
 * 设置收起/打开侧边栏
 * @param value 收起/打开
 * @returns 
 */
export function changeCollapsed (value: boolean) {
    return {
        type: CHANGECOLLAPSED,
        value: value
    }
}