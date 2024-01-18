/*
 * @Author: kime
 * @Date: 2022-06-28 16:32:13
 * @LastEditors: liaozheqin
 * @LastEditTime: 2024-01-16 10:00:52
 * @Description: 根组件
 */

import PageRoutes from "./routes";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

function App () {
    return (
        <div className="App">
            <BrowserRouter>
                <PageRoutes />
            </BrowserRouter>
        </div>
    );
}
export default App;
