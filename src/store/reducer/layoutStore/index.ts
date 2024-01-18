/*
 * @Author: kime
 * @Date: 2022-06-29 14:13:22
 * @LastEditors: liaozheqin
 * @LastEditTime: 2024-01-12 15:22:08
 * @Description:
 */
import { CHANGECOLLAPSED } from "../../actiontypes/layoutActionType";

let layoutState = {
    isCollapsed: false, //侧边栏是否收起
};

export default function layoutStore (
    state: any = layoutState,
    action: { value: string; type: string }
) {
    switch (action.type) {
        case CHANGECOLLAPSED:
            return {
              isCollapsed: action.value,
            };
        default:
            return state;
    }
}
