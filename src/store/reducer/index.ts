/*
 * @Author: kime
 * @Date: 2022-06-29 14:24:31
 * @LastEditors: liaozheqin
 * @LastEditTime: 2024-01-12 15:30:43
 * @Description: react redux reducer combine
 */
import { combineReducers } from "redux"
import loginStore from "./loginStore"
import layoutStore from "./layoutStore"

export default combineReducers({
    loginStore,
    layoutStore
})
