/*
 * @Author: kime
 * @Date: 2022-11-21 14:35:10
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 15:00:10
 * @Description: store的状态管理入口
 */
import { legacy_createStore as createStore } from "redux";

import reducer from "./reducer"; //redux 的 reducer方法
const store = createStore(reducer);

export default store;

// 如果需要使用redux 持久化  redux-persist

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// const persistConfig = {
//     key: 'root',
//     storage,
// }
// const persistedReducer = persistReducer(persistConfig, reducer)

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }
