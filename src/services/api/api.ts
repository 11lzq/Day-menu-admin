/*
 * @Author: kime
 * @Date: 2022-07-01 14:00:51
 * @LastEditors: kime
 * @LastEditTime: 2022-11-22 09:16:00
 * @Description: 拆开文件，便于多人开发自行管理api
 */

import { Post } from "../http";

// 获取数据的接口
export const homeTalentexpress = (data?: any) => Post("/api/applets/talentexpress", data);