/*
 * @Author: kime
 * @Date: 2022-06-29 10:24:28
 * @LastEditors: kime
 * @LastEditTime: 2022-07-01 17:36:17
 * @Description: Eslint的配置文件
 */

module.export = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module",
        "ecmaVersion": 2017
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // 严格限制缩进
        "indent": [
            "error",
            "tab"
        ],
        // 引号的使用，必须使用双引号
        "quotes": [
            "error",
            "double"
        ],
        // 所有结束行都需要加上 ”分号
        "semi": [
            "error",
            "always"
        ],
        // 解决react里面的缩进问题
        "react/jsx-indent": [
            "error",
            "tab"
        ],
        // 解决react里面的缩进问题
        "react/jsx-indent-props": [
            "error",
            "tab"
        ],
        // 允许在 .js 和 .jsx 文件中使用 jsx 
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};
