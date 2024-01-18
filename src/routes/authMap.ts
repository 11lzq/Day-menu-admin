/*
 * @Author: liaozheqin
 * @Date: 2024-01-15 16:45:00
 * @LastEditTime: 2024-01-16 10:45:04
 * @LastEditors: liaozheqin
 * @Description: 
 * @FilePath: /react-tsvite-cli-main/src/routes/authMap.ts
 */

type AuthMap = Record<string, Array<string>>;

export const AUTH_MAP:AuthMap = {
  "admin":["home","redux"],
  "guest":["home"]
}