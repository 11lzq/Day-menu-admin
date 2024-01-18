/*
 * @Author: kime
 * @Date: 2022-11-18 16:23:35
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 15:14:49
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from './store';
import './index.scss'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    //   <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    //   </React.StrictMode>
)
