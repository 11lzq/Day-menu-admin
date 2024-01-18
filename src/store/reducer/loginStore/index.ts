/*
 * @Author: kime
 * @Date: 2022-06-29 14:13:22
 * @LastEditors: liaozheqin
 * @LastEditTime: 2024-01-12 15:21:51
 * @Description:
 */
import { LOGINSTATUS } from "../../actiontypes/loginActionType";

let loginState = {
    token: "", //登录的状态管理token
};

export default function loginStore (
    state: any = loginState,
    action: { value: string; type: string }
) {
    switch (action.type) {
        case LOGINSTATUS:
            return {
                token: action.value,
            };
        default:
            return state;
    }
}
